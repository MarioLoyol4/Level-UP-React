
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import LoginPage from './components/pages/LoginPage'
import Cart from './components/pages/Cart'
import { Link } from 'react-router-dom'


function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<LoginPage/>}/>
        <Route path='/cart' element = {<Cart/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
