import React from 'react';
import  CarritoService  from '../services/CarritoService';
import  AuthService  from '../services/AuthService';


export default function ProductCard({ producto }) {
  const handleAddToCart = async () => {
    if (!AuthService.isAuthenticated()) {
      alert('Debes iniciar sesión para agregar productos al carrito');
      window.location.href = '/login';
      return;
    }
    
    try {
      await CarritoService.agregarProducto(producto.id, 1);
      alert(`"${producto.nombre}" agregado al carrito`);
    } catch (error) {
      console.error('Error al agregar al carrito:', error);
      alert('Error al agregar producto al carrito');
    }
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img 
          src={producto.imagen} 
          alt={producto.nombre}
          onError={(e) => {
            e.target.src = '/placeholder-product.png';
          }}
        />
      </div>
      
      <div className="product-info">
        <span className="product-category">{producto.categoria}</span>
        <h3 className="product-name">{producto.nombre}</h3>
        
        {producto.descripcion && (
          <p className="product-description">{producto.descripcion}</p>
        )}
        
        <div className="product-footer">
          <span className="product-price">
            ${producto.precio ? producto.precio.toLocaleString('es-CL') : '0'}
          </span>
          <button 
            className="add-to-cart-btn"
            onClick={handleAddToCart}
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
}