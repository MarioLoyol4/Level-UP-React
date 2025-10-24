
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';


jest.mock('../molecules/Logo', () => () => <div data-testid="logo-mock" />);

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

const mockLocalStorage = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => { store[key] = value.toString(); },
    clear: () => { store = {}; }
  };
})();
Object.defineProperty(window, 'localStorage', { value: mockLocalStorage });

const mockSessionStorage = (() => {
  let store = {};
  return {
    setItem: jest.fn((key, value) => { 
      store[key] = value.toString(); 
    }),
    clear: jest.fn(() => { 
      store = {}; 
    }),
    getItem: jest.fn((key) => store[key] || null) 
  };
})();
Object.defineProperty(window, 'sessionStorage', { value: mockSessionStorage });

jest.spyOn(window, 'alert').mockImplementation(() => {});

describe('Componente Login', () => {
  
  const mockOnSwitch = jest.fn();
  const usuarioMock = {
    nombre: 'Usuario Registrado',
    correo: 'registrado@correo.com',
    password: 'passwordSegura123'
  };

  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
    jest.clearAllMocks();
    localStorage.setItem('usuarios', JSON.stringify([usuarioMock]));
  });

  it('permite un inicio de sesión exitoso', () => {
    render(<Login onSwitchToRegister={mockOnSwitch} />);

    fireEvent.change(screen.getByLabelText(/ingrese su correo/i), { target: { value: 'registrado@correo.com' } });
    fireEvent.change(screen.getByLabelText(/ingrese su contraseña/i), { target: { value: 'passwordSegura123' } });

    fireEvent.click(screen.getByText('Iniciar sesion'));

    expect(window.alert).toHaveBeenCalledWith('¡Bienvenido, Usuario Registrado!');
    expect(sessionStorage.setItem).toHaveBeenCalledWith('usuarioLogueado', JSON.stringify(usuarioMock));
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  it('muestra error si las credenciales son incorrectas', () => {
    render(<Login onSwitchToRegister={mockOnSwitch} />);

    fireEvent.change(screen.getByLabelText(/ingrese su correo/i), { target: { value: 'registrado@correo.com' } });
    fireEvent.change(screen.getByLabelText(/ingrese su contraseña/i), { target: { value: 'passwordINCORRECTA' } });

    fireEvent.click(screen.getByText('Iniciar sesion'));

    expect(screen.getByText('Correo o contraseña incorrectos.')).toBeInTheDocument();
    expect(sessionStorage.setItem).not.toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it('llama a onSwitchToRegister al hacer clic en "Registrate aquí"', () => {
    render(<Login onSwitchToRegister={mockOnSwitch} />);

    fireEvent.click(screen.getByText('Registrate aquí'));

    expect(mockOnSwitch).toHaveBeenCalledTimes(1);
  });
});