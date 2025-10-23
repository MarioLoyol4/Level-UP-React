import React from 'react'

export default function Register({onSwitchToLogin}) {
  return (
    <form action="" id="registro">
        <div className="row">
            <label for="nombre">Ingrese su nombre y apellido</label>
            <input type="text" id="nombre"/>
        </div>
        <div className="row">         
            <label for="correo">Ingrese un correo</label>
            <input type="email" id="correo"/>
        </div>
        <div className="row">
            <label for="direccion">Ingrese su direccion</label>
            <input type="text" id="direccion"/>
        </div>
        <div className="row">
            <label for="edad">Ingrese su fecha de nacimiento</label>
            <input type="date" id="edad"/>
        </div>
        <div className="row">
            <label for="contra1">Ingrese una contraseña</label>
            <input type="password" id="contra1"/>
        </div>
        <div className="row">
            <label for="contra2">Confirme su contraseña</label>
            <input type="password" id="contra2"/>
        </div> 
        <button type="submit">Registrar</button>
        <p id="errores">&nbsp;</p>
        <div className="login-link">
            ¿Ya tienes cuenta? {''} <a href="#" onClick={onSwitchToLogin}>Inicia sesion</a>
        </div> 
    </form>
  )
}
