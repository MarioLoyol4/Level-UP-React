import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductoService from '../services/ProductoService';

const ProductoFrom = () => {
    const[nombre, setNombre] = useState('');
    const[categoria, setCategoria] = useState('');
    const[precio, setPrecio] = useState('');
    const{id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            ProductoService.getProductoById(id).then(response =>{
                setNombre(response.data.nombre);
                setCategoria(response.date.categoria);
                setPrecio(response.data.precio)
            });
        }
    }, [id]);

    const saveOrUpdateProducto = (e) => {
        e.preventDefault();
        const producto = { nombre, categoria, precio };

        if (id) {
            ProductoService.updateProducto(id, producto).then(() => {
                navigate('/');
            });
        } else {
            ProductoService.createProducto(producto).then(() => {
                navigate('/');
            });
        }
    };

    return(
        <div>
            <h2>{id ? 'Edit Prodcuto' : 'Add Producto'}</h2>
            <form onSubmit={saveOrUpdateProducto}>
                <div>
                    <label>nombre:</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>categoria:</label>
                    <input
                        type="text"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>precio:</label>
                    <input
                        type="text"
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">{id ? 'Update' : 'Save'}</button>
            </form>
        </div>
    );
};

export default ProductoFrom;
