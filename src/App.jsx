import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductoList from './components/ProductoList';
import ProductoFrom from './components/ProductoFrom';
import Login from './components/organisms/Login';
import Register from './components/organisms/Register';

function App() {
  return (
    <Router>
      <div>
        <h1>Level-Up</h1>
        <Routes>


          <Route path="/" element={<Login />} />
          <Route path="/productos" element={<ProductoList />} />
          <Route path="/add" element={<ProductoFrom />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
