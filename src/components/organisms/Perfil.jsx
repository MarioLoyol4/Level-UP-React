import React from 'react';

export default function Perfil() {
  const userData = {
    nombre: localStorage.getItem('userNombre') || 'Usuario',
    email: localStorage.getItem('userEmail') || 'usuario@email.com',
    rol: localStorage.getItem('userRole') || 'cliente'
  };

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = '/login';
  };

  return (
    <section id="perfil">
      <h2>👤 Mi Perfil</h2>
      
      <div style={{ 
        background: 'rgba(0,0,0,0.7)', 
        padding: '20px', 
        borderRadius: '10px',
        maxWidth: '500px',
        margin: '0 auto'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <p><strong>Nombre:</strong> {userData.nombre}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Rol:</strong> {userData.rol}</p>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <button 
            onClick={handleLogout}
            className="btn-primary"
            style={{ background: '#ff4444', color: 'white' }}
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </section>
  );
}