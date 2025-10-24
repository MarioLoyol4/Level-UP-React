import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Product from "./Product"; 

describe("Product — (Lógica Simple)", () => {
  
 
  beforeEach(() => {
    
    Storage.prototype.getItem = jest.fn(() => JSON.stringify([]));
    
    Storage.prototype.setItem = jest.fn();
    
    jest.spyOn(window, "alert").mockImplementation(() => {});
  });

  it("guarda el producto completo en localStorage (sin qty)", () => {
    const mockProduct = {
      id: "S-001",
      imagen: "img/Silla_Gamer/silla1.png",
      nombre: "Silla Gamer",
      categoria: "sillas",
      precio: 85000,
    };

   
    render(<Product product={mockProduct} />);

   
    fireEvent.click(screen.getByText(/Añadir al carro/i));

    
    expect(localStorage.setItem).toHaveBeenCalled();

   
    const payload = JSON.parse(localStorage.setItem.mock.calls[0][1]);

    
    expect(payload).toHaveLength(1);
    
    expect(payload[0].id).toBe("S-001");
    
    expect(payload[0].qty).toBeUndefined();
  });
});