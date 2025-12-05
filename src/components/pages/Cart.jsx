import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import CarritoService from '../../services/CarritoService';
import AuthService from '../../services/AuthService';

export default function Cart() {
  const navigate = useNavigate();
  const [carritoItems, setCarritoItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const loggedIn = AuthService.isAuthenticated();
      setIsLoggedIn(loggedIn);
    };
    
    checkAuth();
    cargarCarrito();
    const handleCarritoActualizado = () => cargarCarrito();
    const handleAuthChange = () => checkAuth();
    
    window.addEventListener('carritoActualizado', handleCarritoActualizado);
    window.addEventListener('authChange', handleAuthChange);
    
    return () => {
      window.removeEventListener('carritoActualizado', handleCarritoActualizado);
      window.removeEventListener('authChange', handleAuthChange);
    };
  }, []);

  const cargarCarrito = async () => {
    try {
      setLoading(true);
      const items = await CarritoService.getCarrito();
      setCarritoItems(items);
    } catch (error) {
      console.error('Error al cargar carrito:', error);
      setCarritoItems([]);
    } finally {
      setLoading(false);
    }
  };

  const eliminarProducto = async (itemId) => {
    try {
      await CarritoService.eliminarProducto(itemId);
      cargarCarrito();

      const notification = document.createElement('div');
      notification.className = 'cart-notification error';
      notification.innerHTML = `
        <div class="notification-content">
          <span class="notification-icon">🗑️</span>
          <div>
            <p>Producto eliminado del carrito</p>
          </div>
        </div>
      `;
      document.body.appendChild(notification);
      
      setTimeout(() => notification.remove(), 3000);
    } catch (error) {
      console.error('Error al eliminar del carrito:', error);
      alert('Error al eliminar producto');
    }
  };

  const actualizarCantidad = async (itemId, nuevaCantidad) => {
    if (nuevaCantidad < 1) return;
    
    try {
      await CarritoService.actualizarCantidad(itemId, nuevaCantidad);
      cargarCarrito();
    } catch (error) {
      console.error('Error al actualizar cantidad:', error);
    }
  };

  const clearCart = async () => {
    if (!window.confirm('¿Vaciar todo el carrito?')) return;
    
    try {
      await CarritoService.vaciarCarrito();
      setCarritoItems([]);
      
      const notification = document.createElement('div');
      notification.className = 'cart-notification error';
      notification.innerHTML = `
        <div class="notification-content">
          <span class="notification-icon">🛒</span>
          <div>
            <p>Carrito vaciado</p>
          </div>
        </div>`;
      document.body.appendChild(notification);
      
      setTimeout(() => notification.remove(), 3000);
    } catch (error) {
      console.error('Error al vaciar carrito:', error);
    }
  };

  const calculateTotal = () => {
    return carritoItems.reduce((total, item) => {
      return total + (item.precio * item.cantidad);
    }, 0);
  };

  const handleCheckout = async () => {
    if (!isLoggedIn) {
      const confirmar = window.confirm(
        'Para proceder al pago necesitas iniciar sesión.\n' +
        '¿Deseas iniciar sesión ahora?\n\n' +
        'Tu carrito se guardará automáticamente.'
      );
      
      if (confirmar) {
        navigate('/login', { 
          state: { 
            from: '/cart',
            message: 'Inicia sesión para completar tu compra' 
          } 
        });
      }
      return;
    }

    try {
      const datosEnvio = {
        direccion: prompt('Ingresa tu dirección de envío:'),
        telefono: prompt('Ingresa tu teléfono:')
      };
      
      if (datosEnvio.direccion && datosEnvio.telefono) {
        const orden = await CarritoService.checkout(datosEnvio);
        alert(`La compra se a realizado con ecito.\nTu número de orden es: ${orden.numeroOrden}`);
        setCarritoItems([]);
      }
    } catch (error) {
      console.error('Error en checkout del pedido:', error);
      if (error.message === 'Se debeiniciar sesion para realizar el pedido') {
        alert('Sesion expirada. Por favor, inicie sesion nuevamente.');
        navigate('/login');
      } else {
        alert('Error al procesar la compra: ' + error.message);
      }
    }
  };

  const handleContinueShopping = () => {
    navigate('/catalogo');
  };

  if (loading) {
    return (
      <div className="cart-container">
        <div className="loading">
          <div className="spinner"></div>
          <p>Cargando carrito...</p>
        </div>
      </div>
    );
  }

  const itemCount = carritoItems.reduce((total, item) => total + item.cantidad, 0);

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>🛒 Carrito de Compras</h2>
        <div className="cart-stats">
          <span className="items-count">
            Productos: <span className="count-number">{itemCount}</span>
          </span>
          <span className="total-price">
            Total: $<span className="total-number">{calculateTotal().toLocaleString()}</span>
          </span>
        </div>
      </div>

      {carritoItems.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-icon">🛒</div>
          <h3>Tu carrito está vacío</h3>
          <p>¡Agrega algunos productos para empezar a comprar!</p>
          <button onClick={handleContinueShopping} className="btn-primary">
            Ver Catálogo
          </button>
        </div>
      ) : (
        <>
          {!isLoggedIn && (
            <div className="guest-cart-warning">
              <div className="warning-icon">👤</div>
              <div className="warning-content">
                <h4>Carrito de invitado</h4>
                <p>
                  Estás navegando como invitado. Para proceder al pago y guardar tu carrito, 
                  <Link to="/login" className="auth-link-inline"> inicia sesión</Link> o 
                  <Link to="/register" className="auth-link-inline"> regístrate</Link>.
                </p>
                <small>Tu carrito se guarda automáticamente en este dispositivo.</small>
              </div>
            </div>
          )}

          <div className="table-responsive">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>PRODUCTO</th>
                  <th>CANTIDAD</th>
                  <th>PRECIO UNIT.</th>
                  <th>TOTAL</th>
                  <th>ACCIÓN</th>
                </tr>
              </thead>
              <tbody>
                {carritoItems.map((item) => (
                  <tr key={item.id} className="product-row">
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <img 
                          src={item.producto?.imagen || '/placeholder.png'} 
                          alt={item.producto?.nombre}
                          className="product-img"
                        />
                        <div>
                          <div className="product-name">{item.producto?.nombre}</div>
                          <div style={{ fontSize: '0.8rem', color: '#ccc' }}>
                            {item.producto?.categoria}
                          </div>
                          {item.esTemporal && (
                            <div style={{ fontSize: '0.7rem', color: '#39FF14' }}>
                               Sin sincronizar
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <button 
                          onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}
                          className="quantity-btn"
                          disabled={item.cantidad <= 1}
                        >
                          -
                        </button>
                        <span style={{ minWidth: '30px', textAlign: 'center' }}>
                          {item.cantidad}
                        </span>
                        <button 
                          onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
                          className="quantity-btn"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="product-price">${item.precio?.toLocaleString()}</td>
                    <td className="product-price">${(item.precio * item.cantidad).toLocaleString()}</td>
                    <td>
                      <button
                        onClick={() => eliminarProducto(item.id)}
                        className="btn-delete"
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="cart-footer">
            <div className="cart-total">
              Total a pagar: <span className="final-total">${calculateTotal().toLocaleString()}</span>
            </div>
            
            <div className="cart-buttons">
              <button onClick={handleContinueShopping} className="btn-secondary">
                ← Seguir Comprando
              </button>
              
              <button 
                onClick={clearCart}
                className="btn-clear"
              >
                Vaciar Carrito
              </button>
              
              <button 
                className={`btn-checkout ${!isLoggedIn ? 'guest-checkout' : ''}`}
                onClick={handleCheckout}
              >
                {!isLoggedIn ? (
                  <>
                    <span></span> Iniciar Sesión para Pagar
                  </>
                ) : (
                  'Proceder al Pago'
                )}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}