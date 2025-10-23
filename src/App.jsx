
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import LoginPage from './components/pages/LoginPage'


function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
