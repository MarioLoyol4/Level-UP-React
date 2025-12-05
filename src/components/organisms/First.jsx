import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../molecules/Logo';
import AuthService from '../../services/AuthService';

export default function First() {
  const navigate = useNavigate();
  const [productosCarrito, setProductosCarrito] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    checkAuth();
    cargarContadorCarrito();

    window.addEventListener('carritoActualizado', cargarContadorCarrito);
    window.addEventListener('authChange', checkAuth);
    
    return () => {
      window.removeEventListener('carritoActualizado', cargarContadorCarrito);
      window.removeEventListener('authChange', checkAuth);
    };
  }, []);

  const checkAuth = () => {
    const loggedIn = AuthService.isAuthenticated();
    setIsLoggedIn(loggedIn);
    if (loggedIn) {
      setUser(AuthService.getCurrentUser());
    } else {
      setUser(null);
    }
  };

  const cargarContadorCarrito = async () => {
    try {
      const carritoLocal = localStorage.getItem('carrito');
      if (carritoLocal) {
        const carrito = JSON.parse(carritoLocal);
        const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
        setProductosCarrito(totalItems);
      }
    } catch (error) {
      console.error('Error cargando contador del carrito:', error);
    }
  };

  const handleLogout = () => {
    AuthService.logout();
    setIsLoggedIn(false);
    setUser(null);
    navigate('/');
    window.dispatchEvent(new Event('authChange'));
  };

  return (
    <header className="site-header">
      <nav className="main-nav">
        <div className="nav-left">
          <div className="logo-container">
            <Logo />
          </div>
          
          <ul>
            <li><Link to="/">🏠 Inicio</Link></li>
            <li><Link to="/noticias">📰 Noticias</Link></li>
            <li><Link to="/nosotros">👥 Nosotros</Link></li>

          </ul>
        </div>
        
        <div className="nav-right">
          {isLoggedIn ? (
            <>
              <div className="user-info">
                <span className="user-name">👤 {user?.nombre || 'Usuario'}</span>
              </div>
              <Link to="/perfil" className="btn-profile">
                Mi Perfil
              </Link>
              <button onClick={handleLogout} className="btn-logout">
                🚪 Salir
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn-login">
                🔑 Iniciar Sesión
              </Link>
              <Link to="/register" className="btn-register">
                📝 Registrarse
              </Link>
            </>
          )}
          
          <Link to="/cart" className="cart-link">
            🛒 Carrito 
            {productosCarrito > 0 && <span className="items">{productosCarrito}</span>}
          </Link>
        </div>
      </nav>
    </header>
  );
}