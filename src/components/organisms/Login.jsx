import React from 'react'

export default function Login({onSwitchToRegister}) {
  return (
    <form action="" id="formulario">
        <div className="row">         
            <label for="log-correo">Ingrese su correo</label>
            <input type="email" id="log-correo"/>
        </div>
        <div className="row">
            <label for="contra">Ingrese su contraseña</label>
            <input type="password" id="contra"/>
        </div>
        <button type="submit">Iniciar sesion</button>
        <p id="errores">&nbsp;</p>

        <div className="register-link">
            ¿No tienes cuenta? {''} <a href="#" onClick={onSwitchToRegister}>Registrate aquí</a>
        </div>
    
    </form>
  )
}
