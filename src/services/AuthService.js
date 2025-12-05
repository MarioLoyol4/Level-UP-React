import api from "../api/AxiosConfig";

const AuthService = {
  login: async (email, password) => {
    try {
      console.log('Enviando login para:', email);
      
      const response = await api.post('/auth/login', {
        email,
        password
      });
      
      console.log('Respuesta del login:', response.data);
      
      if (response.data.token) {

        localStorage.setItem('token', response.data.token);
        localStorage.setItem('currentUser', JSON.stringify(response.data.user));
        

        api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        

        setTimeout(async () => {
          try {
            await CarritoService.sincronizarCarrito();
            window.dispatchEvent(new Event('carritoActualizado'));
            console.log('✅ Carrito sincronizado después del login');
          } catch (syncError) {
            console.error('Error sincronizando carrito:', syncError);
          }
        }, 500);
        
        return { 
          success: true, 
          message: response.data.message,
          user: response.data.user 
        };
      }
      
      return { 
        success: false, 
        error: response.data.error || 'Error en el inicio de sesión' 
      };
      
    } catch (error) {
      console.error('Error completo en login:', error);
      
      let errorMessage = 'Error en el inicio de sesión';
      if (error.response) {
        errorMessage = error.response.data.error || error.response.data.message || errorMessage;
      } else if (error.request) {
        errorMessage = 'No se pudo conectar con el servidor';
      }
      
      return { success: false, error: errorMessage };
    }
  },
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    delete api.defaults.headers.common['Authorization'];
    return { success: true };
  },

  isAuthenticated: () => {
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('currentUser');

  // Evita autenticar si el user es "undefined"
  if (!token || !user || user === "undefined") return false;

  return true;
},


  getCurrentUser: () => {
    const userStr = localStorage.getItem('currentUser');
    return userStr ? JSON.parse(userStr) : null;
  },
  getUserRole: () => {
    const user = AuthService.getCurrentUser();
    return user ? user.role : 'invitado';
  },
  getToken: () => {
    return localStorage.getItem('token');
  },

  validateToken: async () => {
    try {
      const token = AuthService.getToken();
      if (!token) return { valid: false };
      
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const response = await api.get('/auth/validate');
      return { valid: response.data.valid };
    } catch (error) {
      return { valid: false };
    }
  }
};
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default AuthService;