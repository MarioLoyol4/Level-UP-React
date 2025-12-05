// Product.jsx - MODIFICADO
import React from 'react';
import { Link } from 'react-router-dom';
import CarritoService from '../../services/CarritoService';

export default function Product({ product }) {
  const handleAddToCart = async () => {
    try {
      await CarritoService.agregarProducto(product.id, 1);

      const notification = document.createElement('div');
      notification.className = 'cart-notification';
      notification.innerHTML = `
        <div class="notification-content">
          <span class="notification-icon">✅</span>
          <div>
            <strong>${product.nombre}</strong>
            <p>Agregado al carrito</p>
          </div>
        </div>
      `;
      document.body.appendChild(notification);

      setTimeout(() => {
        notification.remove();
      }, 2000);
      
      window.dispatchEvent(new Event('carritoActualizado'));
      
    } catch (error) {
      console.error('Error al agregar al carrito:', error);
      alert('Error al agregar producto al carrito');
    }
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img 
          src={product.imagen || '/placeholder.png'} 
          alt={product.nombre}
          onError={(e) => {
            e.target.src = '/placeholder.png';
          }}
        />
      </div>
      
      <div className="product-info">
        <span className="product-category">{product.categoria}</span>
        <h3 className="product-name">{product.nombre}</h3>
        
        {product.descripcion && (
          <p className="product-description">{product.descripcion}</p>
        )}
        
        <div className="product-price-row">
          <span className="product-price">
            ${product.precio ? product.precio.toLocaleString('es-CL') : '0'}
          </span>
        </div>
        
        <div className="product-actions">
          <button 
            className="add-to-cart-btn"
            onClick={handleAddToCart}
            title="Agregar al carrito"
          >
            <span>🛒</span> Agregar al Carrito
          </button>
          

        </div>
      </div>
    </div>
  );
}