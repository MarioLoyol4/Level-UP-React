import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductoList from './components/ProductoList';
import ProductoFrom from './components/ProductoFrom';


function App() {
  return (
    <Router>
      <div>
        <h1>Producto Management System</h1>
        <Routes>
          <Route path="/" element={<ProductoList />} />
          <Route path="/add" element={<ProductoFrom />} />
          <Route path="/edit/:id" element={<ProductoFrom />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
