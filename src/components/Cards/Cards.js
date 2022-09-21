import React from 'react'
import logo from "./Logo.svg";
import "./Cards.css";
import add from './Add.svg';

const Cards = () => {
  return (
<div className='container'>
   <div className='header'>
    <img className='logo' src={logo}></img>
    <h1 className='text'>LINKSAVER</h1>
 </div>

<div className='data'>
 <div className='form'>
  <form>
    <div><input className='form-input' type="text" placeholder='Enter info here'></input></div>
    <div><input className='form-input2' type="text" placeholder='Paste link here'></input></div>
   <div className='sub-btn'><button>Submit</button></div> 
  </form>
  </div>

  <div className='form'>
  <form>
    <div><input className='form-input' type="text" placeholder='Enter info here'></input></div>
    <div><input className='form-input2' type="text" placeholder='Paste link here'></input></div>
   <div className='sub-btn'><button>Submit</button></div> 
  </form>
  </div>

 <div className='form'>
  <form>
    <div><input className='form-input' type="text" placeholder='Enter info here'></input></div>
    <div><input className='form-input2' type="text" placeholder='Paste link here'></input></div>
   <div className='sub-btn'><button>Submit</button></div> 
  </form>
</div>

<div className='form'>
  
  <form>
    <img className='add' src={add}></img>
    <span className='add-text'>Add new link</span>
  </form>
  </div>
 </div>
</div>
  )
}

export default Cards
