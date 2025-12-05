import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import First from './components/organisms/First';
import Home from './components/pages/Home';
import Catalogo from './components/organisms/Catalogo';
import Cart from './components/pages/Cart';
import Login from './components/organisms/Login';
import Register from './components/organisms/Register';
import './App.css';
import Noticias from './components/organisms/Noticias';
import Nosotros from './components/organisms/Nosotros';

function App() {
  return (
    <Router>
      <div className="App">
        <First />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Home />} />
          <Route path="/Cart" element={<Cart/>} />
          <Route path='/noticias' element={<Noticias/>}/>
          <Route path='/nosotros' element={<Nosotros/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />


        </Routes>
      </div>
      
    </Router>
  );
}

export default App;