import { fireEvent, render, screen } from "@testing-library/react";
import Cart from "./Cart"; 
import React from "react";


jest.mock("react-router-dom", () => ({
  useNavigate: () => jest.fn(),
  Link: ({ children, to }) => <a href={to}>{children}</a> 
}));

describe("Cart — (Lógica Simple)", () => {
  
  
  const mockProducts = [
    { id: "S-001", imagen: "...", nombre: "Silla Gamer", categoria: "sillas", precio: 85000 },
    { id: "J-002", imagen: "...", nombre: "Juego de mesa Catan", categoria: "juegos", precio: 25000 },
  ];

  beforeEach(() => {
    Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockProducts));
    Storage.prototype.removeItem = jest.fn();
  });


  it("muestra los productos y el total de items (length)", () => {
    render(<Cart />);
    expect(screen.getByText("Silla Gamer")).toBeInTheDocument();
    expect(screen.getByText("Juego de mesa Catan")).toBeInTheDocument();
    const itemCount = screen.getByText("2");
    expect(itemCount).toBeInTheDocument();
    expect(itemCount.className).toBe("items");
  });
  

  it("el botón 'Vaciar' llama a localStorage.removeItem", () => {
    render(<Cart />);
    const vaciarButton = screen.getByText(/Vaciar/i);
    fireEvent.click(vaciarButton);
    expect(localStorage.removeItem).toHaveBeenCalledWith("productos");
  });
});