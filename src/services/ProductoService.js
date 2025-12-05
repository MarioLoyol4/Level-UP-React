import api from "../api/AxiosConfig";

const ProductoService = {
  getAll: async () => {
    try {
      const response = await api.get('/productos');
      console.log('Respuesta del backend:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error conectando con el backend:', error);
    }
  },

  getById: async (id) => {
    try {
      const response = await api.get(`/productos/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener producto:', error);
      return null;
    }
  },

  getByCategoria: async (categoria) => {
    try {
      const response = await api.get(`/productos/categoria/${categoria}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener por categoría:', error);
      return [];
    }
  }
};

const getProductosLocales = () => {
  return [
    {
      id: 1,
      nombre: "PlayStation 5",
      categoria: "Consolas",
      precio: 549990.0,
      imagen: "https://gmedia.playstation.com/is/image/SIEPDC/ps5-product-thumbnail-01-en-14sep21"
    },
    {
      id: 2,
      nombre: "Control Xbox Series X",
      categoria: "Accesorios",
      precio: 59990.0,
      imagen: "https://png.pngtree.com/png-clipart/20240901/original/pngtree-wireless-xbox-controller-on-white-png-image_15908916.png"
    },
    {
      id: 3,
      nombre: "Catan",
      categoria: "Juegos de Mesa",
      precio: 34990.0,
      imagen: "https://www.pngfind.com/pngs/m/224-2240848_catan-board-game-hd-png-download.png"
    },
    {
      id: 4,
      nombre: "Secretlab Titan Evo",
      categoria: "Sillas Gamers",
      precio: 389990.0,
      imagen: "https://png.pngtree.com/png-vector/20240709/ourlarge/pngtree-black-gaming-chair-png-image_13050960.png"
    },
    {
      id: 5,
      nombre: "Carcassonne",
      categoria: "juegos-mesa",
      precio: 15000.0,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeXsaambUQQYtHrNoYpkjhmJfjYe1glrtg1A&s"
    },
    {
      id: 6,
      nombre: "Cashflow",
      categoria: "juegos-mesa",
      precio: 25000.0,
      imagen: ""
    },
    {
      id: 7,
      nombre: "House 2 House",
      categoria: "juegos-mesa",
      precio: 8000.0,
      imagen: ""
    },
    {
      id: 8,
      nombre: "Silla Gamer Azul",
      categoria: "sillas",
      precio: 85000.0,
      imagen: ""
    },
    {
      id: 9,
      nombre: "Silla Gamer Celeste",
      categoria: "sillas",
      precio: 85000.0,
      imagen: ""
    }
  ];
};

export default ProductoService;