import React from 'react'
import { HashLink } from 'react-router-hash-link'

export default function First() {
  return (
    <section id="first">
        <div className="logo">
            <h1 id="level-up">Level-up Gamer</h1>
        </div>
        <nav>
            <ul>
                <HashLink to="#first" smooth>Inicio</HashLink>
                <li className="dropdown">
                    <HashLink to="#catalogo" smooth>Catálogo ▾</HashLink>
                    <ul className="submenu" id="submenu">
                        <li><a href="#" data-cat="juegos-mesa">Juegos de Mesa</a></li>
                        <li><a href="#" data-cat="accesorios">Accesorios</a></li>
                        <li><a href="#" data-cat="consolas">Consolas</a></li>
                        <li><a href="#" data-cat="pc-gamer">Computadores Gamers</a></li>
                        <li><a href="#" data-cat="sillas">Sillas Gamers</a></li>
                        <li><a href="#" data-cat="mouse">Mouse</a></li>
                        <li><a href="#" data-cat="mousepad">Mousepad</a></li>
                        <li><a href="#" data-cat="poleras">Poleras Personalizadas</a></li>
                        <li><a href="#" data-cat="polerones">Polerones Personalizados</a></li>
                    </ul>
                </li>

                <HashLink to="#about" smooth>Sobre nosotros</HashLink>
                <HashLink to="#map" href='https://www.google.com/maps' smooth>Mapa de eventos</HashLink>
                <li><a href="https://wa.me/56975525335">Soporte tecnico</a></li>
                <li><a href="#" id="perfilLink">Mi perfil</a></li>
                <li><a href="#" id="cerrar-sesion">Cerrar sesión</a></li>
            </ul>
        </nav>
    </section>
  )
}
