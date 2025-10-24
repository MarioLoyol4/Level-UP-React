import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../molecules/Logo'; 

export default function First() {
  
  const navigate = useNavigate();
  const usuarioLogueado = sessionStorage.getItem('usuarioLogueado');

  const handleLogout = (event) => {
    event.preventDefault();
    sessionStorage.removeItem('usuarioLogueado');
    navigate('/login');
  };

  const handleToggleMenu = () => {
    const nav = document.querySelector('.main-nav ul');
    nav.classList.toggle('active');
  };

  return (
    <header className="site-header" id="first">
      
      <div className="top-bar">
        <div className="logo-container">
          <Logo /> 
        </div>
        
        <form className="search-bar">
          <input type="text" placeholder="Buscar..." />
          <button type="submit" className="btn-secondary">Buscar</button>
        </form>
        
        <div className="user-auth">
          {usuarioLogueado ? (
            <>
              <Link to="/perfil" className="btn-secondary">Mi Perfil</Link>
              <a href="#" onClick={handleLogout} className="btn-primary">Cerrar Sesión</a>
            </>
          ) : (
            <>
              <Link to="/login" className="btn-secondary">Iniciar Sesión</Link>
              <Link to="/register" className="btn-primary">Crear Cuenta</Link>
            </>
          )}
        </div>

        <button className="menu-toggle" onClick={handleToggleMenu}>
          &#9776;
        </button>
      </div>

      <nav className="main-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li className="dropdown">
            <Link to="/catalogo">Categorías ▾</Link>
            <ul className="submenu" id="submenu">
              <li><Link to="/JuegosDeMesa" data-cat="juegos-mesa">Juegos de Mesa</Link></li>
              <li><Link to="/Accesorios" data-cat="accesorios">Accesorios</Link></li>
              <li><Link to="/Consolas" data-cat="consolas">Consolas</Link></li>
              <li><Link to="/Pc_gamer" data-cat="pc-gamer">Computadores Gamers</Link></li>
              <li><Link to="/Sillas" data-cat="sillas">Sillas Gamers</Link></li>
              <li><Link to="/Mouse" data-cat="mouse">Mouse</Link></li>
              <li><Link to="/Mousepad" data-cat="mousepad">Mousepad</Link></li>
            </ul>
          </li>
          <li><Link to="/ofertas">Ofertas</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
        
        <Link to="/cart" className="btn-primary cart-button">
          🛒 Carrito
        </Link>
      </nav>
      
    </header>
  );
}