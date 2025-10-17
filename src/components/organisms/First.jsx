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
                        <li><a href="/JuegosDeMesa" data-cat="juegos-mesa">Juegos de Mesa</a></li>
                        <li><a href="/Accesorios" data-cat="accesorios">Accesorios</a></li>
                        <li><a href="/Consolas" data-cat="consolas">Consolas</a></li>
                        <li><a href="/Pc_gamer" data-cat="pc-gamer">Computadores Gamers</a></li>
                        <li><a href="/Sillas" data-cat="sillas">Sillas Gamers</a></li>
                        <li><a href="/Mouse" data-cat="mouse">Mouse</a></li>
                        <li><a href="/Mousepad" data-cat="mousepad">Mousepad</a></li>
                        <li><a href="/PolerasYPolerones" data-cat="poleras">Poleras Y polerones</a></li>
                    </ul>
                </li>

                <HashLink to="/About" smooth>Sobre nosotros</HashLink>
                <HashLink to="/Mapa" href='https://www.google.com/maps' smooth>Mapa de eventos</HashLink>
                <li><a href="https://wa.me/56975525335">Soporte tecnico</a></li>
                <li><a href="#" id="perfilLink">Mi perfil</a></li>
                <li><a href="#" id="cerrar-sesion">Cerrar sesión</a></li>
            </ul>
        </nav>
    </section>
  )
}
