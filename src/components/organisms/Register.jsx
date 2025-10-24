import React, { useState } from 'react'; 
import Logo from '../molecules/Logo';

export default function Register({ onSwitchToLogin }) {
  
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [direccion, setDireccion] = useState('');
  const [edad, setEdad] = useState('');
  const [contra1, setContra1] = useState('');
  const [contra2, setContra2] = useState('');
  const [error, setError] = useState('');

  
  const handleSubmit = (event) => {
    event.preventDefault(); 
    setError(''); 

    
    if (!nombre || !correo || !contra1 || !contra2) {
      setError('Todos los campos son obligatorios (excepto dirección y edad).');
      return;
    }
    if (contra1 !== contra2) {
      setError('Las contraseñas no coinciden.');
      return;
    }
    if (contra1.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    if (usuarios.find(user => user.correo === correo)) {
      setError('El correo electrónico ya está registrado.');
      return;
    }

    const nuevoUsuario = {
      nombre,
      correo,
      direccion,
      edad,
      password: contra1 
    };

    usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('¡Registro exitoso! Ahora puedes iniciar sesión.');
    onSwitchToLogin(); 
  };

  return (
    
    <form id="registro" onSubmit={handleSubmit}>
      <div className='logo'><Logo/></div>
      <div className="row">
        
        <label htmlFor="nombre">Ingrese su nombre y apellido</label>
        
        <input 
          type="text" 
          id="nombre" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
        />
      </div>
      <div className="row">
        <label htmlFor="correo">Ingrese un correo</label>
        <input 
          type="email" 
          id="correo" 
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
      </div>
      <div className="row">
        <label htmlFor="direccion">Ingrese su direccion</label>
        <input 
          type="text" 
          id="direccion" 
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />
      </div>
      <div className="row">
        <label htmlFor="edad">Ingrese su fecha de nacimiento</label>
        <input 
          type="date" 
          id="edad" 
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
      </div>
      <div className="row">
        <label htmlFor="contra1">Ingrese una contraseña</label>
        <input 
          type="password" 
          id="contra1" 
          value={contra1}
          onChange={(e) => setContra1(e.target.value)}
        />
      </div>
      <div className="row">
        <label htmlFor="contra2">Confirme su contraseña</label>
        <input 
          type="password" 
          id="contra2" 
          value={contra2}
          onChange={(e) => setContra2(e.target.value)}
        />
      </div>
      <button type="submit">Registrar</button>
      
    
      {error ? (
        <p id="errores" style={{ color: 'red' }}>{error}</p>
      ) : (
        <p id="errores">&nbsp;</p>
      )}
      
      <div className="login-link">
        ¿Ya tienes cuenta?{' '}
        <a href="#" id="show-login" onClick={onSwitchToLogin}>
          Inicia sesion
        </a>
      </div>
    </form>
  );
}