import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Register from './Register';

jest.mock('../molecules/Logo', () => () => <div data-testid="logo-mock" />);

const mockLocalStorage = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    }
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage
});

jest.spyOn(window, 'alert').mockImplementation(() => {});

describe('Componente Register', () => {

  const mockOnSwitch = jest.fn();

  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  it('permite un registro exitoso', () => {
    render(<Register onSwitchToLogin={mockOnSwitch} />);

    fireEvent.change(screen.getByLabelText(/nombre y apellido/i), { target: { value: 'Usuario Test' } });
    fireEvent.change(screen.getByLabelText(/ingrese un correo/i), { target: { value: 'test@correo.com' } });
    fireEvent.change(screen.getByLabelText(/ingrese una contraseña/i), { target: { value: 'password123' } });
    fireEvent.change(screen.getByLabelText(/confirme su contraseña/i), { target: { value: 'password123' } });

    fireEvent.click(screen.getByText('Registrar'));

    const usuarios = JSON.parse(localStorage.getItem('usuarios'));
    expect(usuarios).toHaveLength(1);
    expect(usuarios[0].correo).toBe('test@correo.com');
    expect(window.alert).toHaveBeenCalledWith('¡Registro exitoso! Ahora puedes iniciar sesión.');
    expect(mockOnSwitch).toHaveBeenCalledTimes(1);
  });

  it('muestra error si las contraseñas no coinciden', () => {
    render(<Register onSwitchToLogin={mockOnSwitch} />);
    
    fireEvent.change(screen.getByLabelText(/nombre y apellido/i), { target: { value: 'Usuario Test' } });
    fireEvent.change(screen.getByLabelText(/ingrese un correo/i), { target: { value: 'test@correo.com' } });
    
    fireEvent.change(screen.getByLabelText(/ingrese una contraseña/i), { target: { value: 'password123' } });
    fireEvent.change(screen.getByLabelText(/confirme su contraseña/i), { target: { value: 'password456' } });

    fireEvent.click(screen.getByText('Registrar'));

    expect(screen.getByText('Las contraseñas no coinciden.')).toBeInTheDocument();
    expect(localStorage.getItem('usuarios')).toBeNull();
    expect(mockOnSwitch).not.toHaveBeenCalled();
  });

  it('muestra error si el correo ya está registrado', () => {
    const usuariosExistentes = [{ nombre: 'Usuario Antiguo', correo: 'usado@correo.com', password: '123' }];
    localStorage.setItem('usuarios', JSON.stringify(usuariosExistentes));

    render(<Register onSwitchToLogin={mockOnSwitch} />);

    fireEvent.change(screen.getByLabelText(/nombre y apellido/i), { target: { value: 'Usuario Nuevo' } });
    fireEvent.change(screen.getByLabelText(/ingrese un correo/i), { target: { value: 'usado@correo.com' } });
    fireEvent.change(screen.getByLabelText(/ingrese una contraseña/i), { target: { value: 'password123' } });
    fireEvent.change(screen.getByLabelText(/confirme su contraseña/i), { target: { value: 'password123' } });

    fireEvent.click(screen.getByText('Registrar'));

    expect(screen.getByText('El correo electrónico ya está registrado.')).toBeInTheDocument();
    const usuarios = JSON.parse(localStorage.getItem('usuarios'));
    expect(usuarios).toHaveLength(1);
    expect(mockOnSwitch).not.toHaveBeenCalled();
  });
});