import React, { useEffect, useState } from 'react';

import { login } from '../services/AuthService';
import ProductoService from '../services/ProductoService';
import { Link } from 'react-router-dom';
export default function ProductosPage() {
const [productos, setProductos] = useState([]);
useEffect(() => {
login("alumno", '123456').then(() => {
ProductoService.getAllProductos().then(res => setProductos(res.data));
});
}, []);
return (
<div>
<h1>Productos</h1>
 <Link to= '/add'>agregar nuevo producto</Link>

<ul>
{productos.map(b => (
<li key={b.id}>{b.nombre} - {b.categoria}</li>
))}
</ul>
</div>
);
}