import React,{useState} from 'react'
import logo from "./Logo.svg";
import "./Cards.css";
import add from './Add.svg';

const Cards = () => {
   const [link,setLink] = useState("");
   const [links, setLinks] = useState([]);


   const handleSubmit = (e) => {
    e.preventDefault();
 
    if(link!==''){
      setLinks([{id:`${link}-${Date.now()}` , link },...links]);
    }
   };


  return (
<div className='container'>
   <div className='header'>
    <img className='logo' src={logo}></img>
    <h1 className='text'>LINKSAVER</h1>
 </div>

<div className='data'>
 <div className='form'>
  <form  onSubmit={handleSubmit}>
    <div><input className='form-input' type="text" placeholder='Enter info here' onChange={(e) => setLink(e.target.value)}></input></div>
    <div><input className='form-input2' type="text" placeholder='Paste link here'></input></div>
   <div className='sub-btn'><button type='submit'>Submit</button></div> 
  </form>
  </div>

  <div className='form'>
    {links.map((t) => (
    <form 
    <div><input className='form-input' type="text" placeholder='Enter info here'>{t.link}</input></div>
    <div><input className='form-input2' type="text" placeholder='Paste link here'></input></div>
    <div  className='sub-btn'><button  type='submit'>Submit</button></div> 
    </form>
    ))}
    </div>
  </div>
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
