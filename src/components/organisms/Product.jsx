import React from 'react'

export default function Product() {
    const productList = [
      { id: 1, nombre: "Juego de mesa Catan", categoria: "juegos-mesa", precio: 25000, imagen: "img/juegos_mesa/catan.png"},
      { id: 2, nombre: "Carcassonne", categoria: "juegos-mesa", precio: 15000, imagen: "img/juegos_mesa/carcassonne.png"},
      { id: 3, nombre: "Cashflow", categoria: "juegos-mesa", precio: 25000, imagen: "img/juegos_mesa/cashflow.png"},
      { id: 4, nombre: "House 2 House", categoria: "juegos-mesa", precio: 8000, imagen: "img/juegos_mesa/house2house.png"},
      { id: 5, nombre: "Magic", categoria: "juegos-mesa", precio: 20000, imagen: "img/juegos_mesa/magico.png"},
      { id: 6, nombre: "Monopoly", categoria: "juegos-mesa", precio: 10000, imagen: "img/juegos_mesa/monopoly.png"},
      { id: 7, nombre: "Monopoly Melbourne Edition", categoria: "juegos-mesa", precio: 20000, imagen: "img/juegos_mesa/monopoly2.png"},
      { id: 8, nombre: "UNO", categoria: "juegos-mesa", precio: 10000, imagen: "img/juegos_mesa/1.png"},
      { id: 9, nombre: "Silla Gamer", categoria: "sillas", precio: 85000, imagen: "img/Silla_Gamer/sillaAzul.png"},
      { id: 10, nombre: "Silla Gamer", categoria: "sillas", precio: 85000, imagen: "img/Silla_Gamer/sillaceleste.png"},
      { id: 11, nombre: "Silla Gamer", categoria: "sillas", precio: 85000, imagen: "img/Silla_Gamer/sillaNaranja.png"},
      { id: 12, nombre: "Silla Gamer", categoria: "sillas", precio: 85000, imagen: "img/Silla_Gamer/sillaRoja1.png"},
      { id: 13, nombre: "Silla Gamer", categoria: "sillas", precio: 85000, imagen: "img/Silla_Gamer/sillaRoja2.png"},
      { id: 14, nombre: "Silla Gamer", categoria: "sillas", precio: 85000, imagen: "img/Silla_Gamer/sillaVerde.png"},
      { id: 15, nombre: "Consola PS4", categoria: "consolas", precio: 350000, imagen: "img/consolas/ps4.png"},
      { id: 16, nombre: "Consola Xbox Series X", categoria: "consolas", precio: 400000, imagen: "img/consolas/Xbox.png"},
      { id: 17, nombre: "Consola Xbox no se, espero haberte ayudado", categoria: "consolas", precio: 350000, imagen: "img/consolas/xbox2.png"},
      { id: 18, nombre: "Consola Xbox y algo(no se)", categoria: "consolas", precio: 350000, imagen: "img/consolas/xbox3.png"},
      { id: 19, nombre: "PC Gamer", categoria: "pc-gamer", precio: 900000, imagen: "img/pc/pc.png"},
      { id: 20, nombre: "PC Gamer", categoria: "pc-gamer", precio: 900000, imagen: "img/pc/pc2.png"},
      { id: 21, nombre: "PC Gamer", categoria: "pc-gamer", precio: 900000, imagen: "img/pc/pc3.png"},
      { id: 22, nombre: "PC Gamer", categoria: "pc-gamer", precio: 900000, imagen: "img/pc/pc4.png"},
      { id: 23, nombre: "PC Gamer", categoria: "pc-gamer", precio: 900000, imagen: "img/pc/pc5.png"},
      { id: 24, nombre: "PC Gamer", categoria: "pc-gamer", precio: 900000, imagen: "img/pc/notebook.png"},
      { id: 25, nombre: "PC Gamer", categoria: "pc-gamer", precio: 900000, imagen: "img/pc/notebook2.png"},+
      { id: 28, nombre: "Audifonos", categoria: "accesorios", precio: 50000, imagen: "img/accesorios/audifonoMolon1.png"},
      { id: 29, nombre: "Audifonos", categoria: "accesorios", precio: 50000, imagen: "img/accesorios/audifonoMolon2.png"},
      { id: 30, nombre: "Audifonos Rojos", categoria: "accesorios", precio: 50000, imagen: "img/accesorios/audifonoMolon3.png"},
      { id: 31, nombre: "Control XBox", categoria: "accesorios", precio: 50000, imagen: "img/accesorios/mandoMolon1.png"},
      { id: 32, nombre: "Mando PS5", categoria: "accesorios", precio: 50000, imagen: "img/accesorios/mandoMolon2.png"},
      { id: 33, nombre: "Mando PS4", categoria: "accesorios", precio: 50000, imagen: "img/accesorios/mandoMolon3.png"},
      { id: 34, nombre: "Control XBox", categoria: "accesorios", precio: 50000, imagen: "img/accesorios/mandoMolon4.png"},
      { id: 35, nombre: "Crombo Microfono + Audifono", categoria: "accesorios", precio: 50000, imagen: "img/accesorios/microfonoMolon1.png"},
      { id: 36, nombre: "Microfono", categoria: "accesorios", precio: 40000, imagen: "img/accesorios/microfonoMolon2.png"},
      { id: 37, nombre: "Mousepad RGB", categoria: "mousepad", precio: 15000, imagen: "img/mousepad/mousepadRGB.png"},
      { id: 38, nombre: "Mouse Gamer RGB", categoria: "mousepad", precio: 15000, imagen: "img/mousepad/mouse.png"},
      { id: 39, nombre: "Mouse X4", categoria: "mousepad", precio: 15000, imagen: "img/mousepad/mouseX4.png"},
      { id: 40, nombre: "Mouse X7", categoria: "mousepad", precio: 15000, imagen: "img/mousepad/mouseX7.png"},
      { id: 41, nombre: "Raton", categoria: "mousepad", precio: 15000, imagen: "img/mousepad/raton.png"},
      { id: 42, nombre: "Teclado", categoria: "mousepad", precio: 15000, imagen: "img/mousepad/teclado.png"},
      { id: 43, nombre: "Tecldo2", categoria: "mousepad", precio: 15000, imagen: "img/mousepad/tecldo2.png"},
      { id: 44, nombre: "Teclado Raton", categoria: "mousepad", precio: 15000, imagen: "img/mousepad/tecladoRaton.png"},
      { id: 45, nombre: "Teclado Raton X", categoria: "mousepad", precio: 15000, imagen: "img/mousepad/tecladoRaron2.png"},
    ]
  return (
    <div className='product'></div>
  )
}
