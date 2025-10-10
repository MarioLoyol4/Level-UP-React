import React from 'react'

export default function Perfil() {
  return (
     <section id="perfil">
    <h2>Mi Perfil</h2>
    <div className="row">
        <label>Nombre:</label>
        
    </div>
    <div className="row">
        <label>Correo:</label>
        
    </div>
    <div className="row">
        <label>Dirección:</label>
        
    </div>
    <div className="row">
        <label>Fecha de nacimiento:</label>
        
    </div>
    <button id="guardar-perfil">Guardar cambios</button>
    </section>
  )
}
