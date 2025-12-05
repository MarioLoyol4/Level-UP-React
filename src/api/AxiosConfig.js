import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:9090/', // ← ¡URL exacta del backend!
});
// Interceptor REQUEST: agregar token automáticamente
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');  // ← Obtiene token persistido
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // ← Lo agrega a cada petición
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// Interceptor RESPONSE: manejar errores 401
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token inválido o expirado
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      window.location.href = '/login';  // ← Redirige automáticamente
    }
    return Promise.reject(error);
  }
);
export default api;
