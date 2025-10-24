import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import Logo from '../molecules/Logo';

export default function Login({ onSwitchToRegister }) {
  

  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const navigate = useNavigate();

 
  const handleSubmit = (event) => {
    event.preventDefault(); 
    setError(''); 

    if (!correo || !password) {
      setError('Por favor, ingresa correo y contraseña.');
      return;
    }


    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioEncontrado = usuarios.find(
      user => user.correo === correo && user.password === password
    );

    if (usuarioEncontrado) {
      
      alert(`¡Bienvenido, ${usuarioEncontrado.nombre}!`);
      sessionStorage.setItem('usuarioLogueado', JSON.stringify(usuarioEncontrado));
      navigate('/'); 
    } else {
  
      setError('Correo o contraseña incorrectos.');
    }
  };

  return (
    
    
    <form id="formulario" onSubmit={handleSubmit}>
      <div className='logo'><Logo/></div>
      <div className="row">
  
        <label htmlFor="log-correo">Ingrese su correo</label>
      
        <input 
          type="email" 
          id="log-correo" 
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
      </div>
      <div className="row">
        <label htmlFor="contra">Ingrese su contraseña</label>
        
        <input 
          type="password" 
          id="contra" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Iniciar sesion</button>
      
     
      {error ? (
        <p id="errores" style={{ color: 'red' }}>{error}</p>
      ) : (
        <p id="errores">&nbsp;</p>
      )}

      <div className="register-link">
        ¿No tienes cuenta?{' '}
        <a href="#" onClick={onSwitchToRegister}>
          Registrate aquí
        </a>
      </div>
    </form>
  );
}