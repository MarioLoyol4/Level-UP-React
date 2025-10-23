import React, { useState } from 'react'
import Logo from '../molecules/Logo'
import Login from '../organisms/Login';
import Register from '../organisms/Register';


export default function LoginPage() {

  const [isLoginView, setIsLoginView] = useState(true);


  const showRegisterView = ()=> setIsLoginView(false);
  const showLoginView = ()=> setIsLoginView(true);

  return (
    <div className='LoginForm'>
      
      {isLoginView ? (
        <Login onSwitchToRegister={showRegisterView}/>
      ) : (
        <Register onSwitchToLogin={showLoginView}/>
      )}
    </div>

  )
}
