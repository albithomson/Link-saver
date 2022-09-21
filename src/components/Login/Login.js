import React from 'react'
import './Login.css';
import logo from './Logo.svg';
import user_icon from "./user_icon.svg";



const Login = () => {
  return (
    <div className='Login-page'>
       <div className='Header'>
        <img src={logo}></img>
        <h1 className='H-name'>LINKSAVER</h1>

       </div>
       <div className='login'>
        <div>
          <input type="text"className='name'   placeholder='Name'></input>
          <input className='email' type="text" placeholder='Email address'></input>
          <button className='submit-btn'>Submit</button>
        </div>
      
         
       </div>
    </div>
  )
}

export default Login
