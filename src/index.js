import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

// Componente de prueba simple
const AppTest = () => {
  return (
    <div style={{
      background: 'linear-gradient(90deg, #39FF14, #1E90FF, black)',
      minHeight: '100vh',
      color: 'white',
      padding: '50px',
      textAlign: 'center'
    }}>
      <h1>✅ React está funcionando</h1>
      <p>Si ves esto, React está cargando correctamente.</p>
      <p>El problema está en App.jsx o los componentes.</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppTest />
  </React.StrictMode>
);