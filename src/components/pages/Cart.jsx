import React from 'react'
export default function Cart() {
  const products = JSON.parse(localStorage.getItem("productos")) || []
  return (
    <>
      <p>🛒<span className="items">{products.length}</span></p>
      <table>
        <thead>
          <tr>
            <th>CODIGO</th>
            <th>IMAGEN</th>
            <th>NOMBRE</th>
            <th>DESCRIPCION</th>
            <th>PRECIO</th>
            <th>ELIMINAR</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(p=>(
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>
                  <img src={p.imagen} alt={p.nombre} />
                </td>
                <td>{p.nombre}</td>
                <td>{p.categoria}</td>
                <td>{p.precio}</td>
                <td><a href="#">eliminar</a></td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <br />
      <button onClick={
        ()=>localStorage.removeItem('productos')
        }>Vaciar</button>
    </>
  )
}
