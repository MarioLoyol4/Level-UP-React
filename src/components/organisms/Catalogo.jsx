import React, { useState, useEffect } from 'react';
import Product from './Product';
import ProductoService from '../../services/ProductoService'; 

export default function Catalogo() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoriaFiltro, setCategoriaFiltro] = useState('todos');
  const [busqueda, setBusqueda] = useState('');
  const [error, setError] = useState(null);

  const categorias = [
    { id: 'todos', nombre: 'Todos los productos' },
    { id: 'juegos-mesa', nombre: 'Juegos de Mesa' },
    { id: 'sillas', nombre: 'Sillas Gamer' },
    { id: 'Consolas', nombre: 'Consolas' },
    { id: 'Accesorios', nombre: 'Accesorios' }
  ];

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const productosData = await ProductoService.getAll();
      console.log('Productos cargados del backend:', productosData);

      const productosFormateados = productosData.map(producto => ({
        id: producto.id,
        nombre: producto.nombre,
        categoria: producto.categoria,
        precio: producto.precio,
        imagen: producto.imagen,
        descripcion: producto.descripcion || ''
      }));
      
      setProductos(productosFormateados);
      localStorage.setItem('productosBackend', JSON.stringify(productosFormateados));
      
    } catch (error) {
      console.error('Error cargando productos:', error);
      setError('No se pudieron cargar los productos del servidor');
    } finally {
      setLoading(false);
    }
  };

  const productosFiltrados = productos.filter(product => {
    const coincideCategoria = categoriaFiltro === 'todos' || 
                             product.categoria.toLowerCase().includes(categoriaFiltro.toLowerCase());
    const coincideBusqueda = product.nombre.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

  return (
    <section id='catalogo'>
      <h2>Catálogo de Productos</h2>
      
      <div className="catalogo-filtros">
        <div className="filtro-categoria">
          <label>Filtrar por categoría:</label>
          <select 
            value={categoriaFiltro}
            onChange={(e) => setCategoriaFiltro(e.target.value)}
          >
            {categorias.map(cat => (
              <option key={cat.id} value={cat.id}>
                {cat.nombre}
              </option>
            ))}
          </select>
        </div>
        
        <div className="filtro-busqueda">
          <input
            type="text"
            placeholder="Buscar producto..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
      </div>

      {error && (
        <div className="error-message">
          <p>{error}</p>
          <button onClick={cargarProductos} className="btn-secondary">
            Reintentar
          </button>
        </div>
      )}

      <p className="contador-productos">
        {loading ? 'Cargando...' : `Mostrando ${productosFiltrados.length} de ${productos.length} productos`}
      </p>

      <div id="productos">
        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#ccc' }}>
            <p>Cargando productos...</p>
          </div>
        ) : productosFiltrados.length > 0 ? (
          productosFiltrados.map(p => (
            <Product key={p.id} product={p} />
          ))
        ) : (
          <div className="sin-resultados">
            <p>No se encontraron productos</p>
            <button 
              onClick={() => {
                setCategoriaFiltro('todos');
                setBusqueda('');
              }}
              className="btn-primary"
            >
              Ver todos los productos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}