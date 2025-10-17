
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import JuegosDeMesa from './components/pages/JuegosDeMesa'
import Accesorios from './components/pages/Accesorios'
import Consolas from './components/pages/Consolas'
import Pc_gamer from './components/pages/Pc_gamer'
import Sillas from './components/pages/Sillas'
import Mouse from './components/pages/Mouse'
import Mousepad from './components/pages/Mousepad'
import PolerasYPolerones from './components/pages/PolerasYPolerones'


function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/JuegosDeMesa' Component={JuegosDeMesa}/>
        <Route path='/Accesorios' Component={Accesorios}/>
        <Route path='/Consolas' Component={Consolas}/>
        <Route path='/Pc_gamer' Component={Pc_gamer}/>
        <Route path='/Sillas' Component={Sillas}/>
        <Route path='/Mouse' Component={Mouse}/>
        <Route path='/Mousepad' Component={Mousepad}/>
        <Route path='/PolerasYPolerones' Component={PolerasYPolerones}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
