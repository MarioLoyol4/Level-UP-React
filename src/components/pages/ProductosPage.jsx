import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductoService from '../services/ProductoService';
import { useAuth } from '../context/AuthContext';

export default function ProductosPage() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  const { logout, username } = useAuth();

  useEffect(() => {
    ProductoService.getAllProducts()
      .then(res => setBooks(res.data))
      .catch(err => {
        setError('Error al cargar libros');
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (loading) return <div>Cargando...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Libros</h1>
        <div>
          <span style={{ marginRight: '15px' }}>Usuario: {username}</span>
          <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
      </div>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <ul>
        {books.map(b => (
          <li key={b.id}>
            <strong>{b.title}</strong> - {b.author}
          </li>
        ))}
      </ul>
    </div>
  );
}
