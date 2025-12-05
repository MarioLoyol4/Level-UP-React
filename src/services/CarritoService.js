import api from "../api/AxiosConfig";
import AuthService from "./AuthService";

const CarritoService = {
  getCarrito: async () => {
    try {
      const token = AuthService.getToken();
      
      if (token) {
        try {
          const response = await api.get('/api/carrito');
          return response.data;
        } catch (backendError) {
          console.log('Backend no disponible, usando localStorage');
        }
      }

      const carritoLocal = localStorage.getItem('carrito');
      return carritoLocal ? JSON.parse(carritoLocal) : [];
      
    } catch (error) {
      console.log('Usando carrito local como fallback');
      const carritoLocal = localStorage.getItem('carrito');
      return carritoLocal ? JSON.parse(carritoLocal) : [];
    }
  },

  agregarProducto: async (productoId, cantidad = 1) => {
    try {
      const token = AuthService.getToken();
      
      if (token) {
        try {
          const response = await api.post('/api/carrito/agregar', {
            productoId,
            cantidad
          });
          return response.data;
        } catch (backendError) {
          console.log('Guardando en localStorage como fallback');
        }
      }
      const carritoLocal = localStorage.getItem('carrito');
      let carrito = carritoLocal ? JSON.parse(carritoLocal) : [];

      const itemExistente = carrito.find(item => item.productoId === productoId);
      
      if (itemExistente) {
        carrito = carrito.map(item => 
          item.productoId === productoId 
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      } else {
        const productos = JSON.parse(localStorage.getItem('productosBackend') || '[]');
        const producto = productos.find(p => p.id === productoId) || {
          id: productoId,
          nombre: `Producto ${productoId}`,
          precio: 0,
          imagen: '',
          categoria: 'General'
        };
        
        carrito.push({
          id: Date.now(), 
          productoId,
          cantidad,
          precio: producto.precio,
          producto: {
            id: producto.id,
            nombre: producto.nombre,
            imagen: producto.imagen,
            categoria: producto.categoria
          },
          esTemporal: !token
        });
      }
      localStorage.setItem('carrito', JSON.stringify(carrito));
      window.dispatchEvent(new Event('carritoActualizado'));
      
      return { success: true, carrito };
      
    } catch (error) {
      console.error('Error al agregar al carrito:', error);
      throw error;
    }
  },

 
  sincronizarCarrito: async () => {
    try {
      const carritoLocal = localStorage.getItem('carrito');
      if (!carritoLocal) return { success: true };
      
      const carrito = JSON.parse(carritoLocal);
      const token = AuthService.getToken();
      
      if (!token || carrito.length === 0) {
        return { success: true };
      }

      for (const item of carrito) {
        if (item.esTemporal) {
          try {
            await api.post('/api/carrito/agregar', {
              productoId: item.productoId,
              cantidad: item.cantidad
            });
          } catch (error) {
            console.error('Error sincronizando producto:', error);
          }
        }
      }
      localStorage.removeItem('carrito');
      
      return { success: true };
    } catch (error) {
      console.error('Error sincronizando carrito:', error);
      return { success: false, error };
    }
  },

  
  actualizarCantidad: async (itemId, nuevaCantidad) => {
    try {
      const token = AuthService.getToken();
      
      if (token) {
        try {
          const response = await api.put(`/api/carrito/${itemId}`, {
            cantidad: nuevaCantidad
          });
          return response.data;
        } catch (backendError) {
          console.log('Actualizando en localStorage');
        }
      }
      const carritoLocal = localStorage.getItem('carrito');
      if (!carritoLocal) return { success: false };
      
      let carrito = JSON.parse(carritoLocal);
      carrito = carrito.map(item => 
        item.id === itemId 
          ? { ...item, cantidad: nuevaCantidad }
          : item
      );
      
      localStorage.setItem('carrito', JSON.stringify(carrito));
      window.dispatchEvent(new Event('carritoActualizado'));
      
      return { success: true };
    } catch (error) {
      console.error('Error al actualizar cantidad:', error);
      throw error;
    }
  },

  eliminarProducto: async (itemId) => {
    try {
      const token = AuthService.getToken();
      
      if (token) {
        try {
          const response = await api.delete(`/api/carrito/${itemId}`);
          return response.data;
        } catch (backendError) {
          console.log('Eliminando de localStorage');
        }
      }
      const carritoLocal = localStorage.getItem('carrito');
      if (!carritoLocal) return { success: false };
      
      let carrito = JSON.parse(carritoLocal);
      carrito = carrito.filter(item => item.id !== itemId);
      
      localStorage.setItem('carrito', JSON.stringify(carrito));
      window.dispatchEvent(new Event('carritoActualizado'));
      
      return { success: true };
    } catch (error) {
      console.error('Error al eliminar producto:', error);
      throw error;
    }
  },

  vaciarCarrito: async () => {
    try {
      const token = AuthService.getToken();
      
      if (token) {
        try {
          const response = await api.delete('/api/carrito/vaciar');
          return response.data;
        } catch (backendError) {
          console.log('Vaciando localStorage');
        }
      }
      localStorage.removeItem('carrito');
      window.dispatchEvent(new Event('carritoActualizado'));
      
      return { success: true };
    } catch (error) {
      console.error('Error al vaciar carrito:', error);
      throw error;
    }
  },
  checkout: async (datosEnvio) => {
    const token = AuthService.getToken();
    
    if (!token) {
      throw new Error('Debes iniciar sesión para proceder al pago');
    }
    
    try {
      const response = await api.post('/api/carrito/checkout', datosEnvio);
      return response.data;
    } catch (error) {
      console.error('Error en checkout:', error);
      throw error;
    }
  }
};

export default CarritoService;