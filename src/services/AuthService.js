import axios from 'axios';

const AUTH_URL = 'http://localhost:9090/auth';

export async function login(email, password) {
  try {
    const response = await axios.post(`${AUTH_URL}/login`, { 
      email, 
      password 
    });
    
    const { token, email: user } = response.data;
    
    // Guardar en localStorage
    localStorage.setItem('token', token);
    localStorage.setItem('email', user);
    
    return { token, email: user };
  } catch (error) {
    console.error('Login falló:', error.response?.data || error.message);
    throw error;
  }
}

export async function register(email, password) {
  try {
    const response = await axios.post(`${AUTH_URL}/register`, { 
      email, 
      password 
    });
    return response.data;
  } catch (error) {
    console.error('Registro falló:', error.response?.data || error.message);
    throw error;
  }
}

export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('email');
}

export function isAuthenticated() {
  return !!localStorage.getItem('token');
}

export function getEmail() {
  return localStorage.getItem('email');
}
