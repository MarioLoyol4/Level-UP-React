import React from 'react'

export default function Product() {
    const productList = [
        { id: 1, nombre: "Juego de mesa Catan", categoria: "juegos-mesa", precio: 25000, imagen: "img/juegos_mesa/catan.png" },
        { id: 2, nombre: "Mouse Gamer RGB", categoria: "mouse", precio: 15000, imagen: "img/Mouse_Gamer/MouseRGB.png" },
        { id: 3, nombre: "Silla Gamer", categoria: "sillas", precio: 85000, imagen: "img/Silla_Gamer/silla1.png" },
        { id: 4, nombre: "Consola PS4", categoria: "consolas", precio: 350000, imagen: "img/consolas/ps4.png" },
        { id: 5, nombre: "PC Gamer", categoria: "pc-gamer", precio: 900000, imagen: "img/pc/pc_gamer1.png" }
    ]
  return (
    <div className='product'></div>
  )
}
