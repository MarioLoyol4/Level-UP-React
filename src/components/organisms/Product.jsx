import React from 'react'

export default function Product({product}) {
    const imageUrl = `/${product.imagen}`;
  return (
    <div className='producto'>
      <img src={imageUrl} alt={product.nombre} />
      <h3>{product.nombre}</h3>
      <p>{product.precio}</p>
      <button onClick={()=> addToCart(product)}>Añadir al carro</button>
    </div>
  )
}


function addToCart(product){
      const products = JSON.parse(localStorage.getItem("productos")) || [];
      products.push(product);
      localStorage.setItem("productos", JSON.stringify(products));
    }
