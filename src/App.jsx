import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductoList from './components/ProductoList';
import ProductoFrom from './components/ProductoFrom';

import Register from './components/organisms/Register';
import LoginPage from './components/pages/LoginPage';
import './App.css'


function App() {
  return (
    <Router>
      <div>
        
        <Routes>


          <Route path="/" element={<LoginPage />} />
          <Route path="/productos" element={<ProductoList />} />
          <Route path="/add" element={<ProductoFrom />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
