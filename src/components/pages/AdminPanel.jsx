import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const AdminPanel = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="admin-panel">
      <h1>👑 Panel de Administración</h1>
      <p>Bienvenido, {user?.email} ({user?.role})</p>
      
      <div className="admin-sections">
        <div className="admin-card">
          <h3>📦 Gestión de Productos</h3>
          <p>Crear, editar y eliminar productos</p>
          <button>Ir a Productos</button>
        </div>
        
        <div className="admin-card">
          <h3>👥 Gestión de Usuarios</h3>
          <p>Ver y administrar usuarios</p>
          <button>Ir a Usuarios</button>
        </div>
        
        <div className="admin-card">
          <h3>📊 Estadísticas</h3>
          <p>Ver reportes y métricas</p>
          <button>Ver Estadísticas</button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;