import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import { AiOutlineAlignRight } from 'react-icons/ai';
import { VscChromeClose } from 'react-icons/vsc';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);


  const openMobileMenu = () => {
    setShow(true);
    setMobileMenu(true)

  }
  const closeMobileMenu = ()=>{
    setShow(false);
    setMobileMenu(false)
  }
  console.log(show)

  return (
    <div className='navbar'>

      <div className='desktop__menu'>

        <div className='left'>LOGO</div>
        <div className='right'>
          <NavLink
            className='link'
            to="/"
            exact
          >Home</NavLink>
          <NavLink
            className='link'
            to="/Service"
            exact
          >Service</NavLink>
          <NavLink
            className='link'
            to="/about"
            exact
          >About</NavLink>
          <NavLink
            className='link'
            to="/contact"
            exact
          >Contact</NavLink>
          <button className='btn'>Log In</button>
          <button className='btn'>Sign Up</button>

        </div>

        
        </div>
        <div className='mobile__Menu'>
          <div className='logo'>LOGO</div>
          <div className='three__line'>
          { !mobileMenu ? 
          
          <AiOutlineAlignRight onClick={openMobileMenu} size={25}/>
          : <VscChromeClose onClick={closeMobileMenu}/>}</div>

      </div>

      {show && <div className='mobile__items'>
      
      <div className='item'><NavLink
            className='link'
            to="/"
            exact
          >Home</NavLink></div>
      <div className='item'><NavLink
            className='link'
            to="/Service"
            exact
          >Service</NavLink></div>
      <div className='item'><NavLink
            className='link'
            to="/about"
            exact
          >About</NavLink></div>
      <div className='item'><NavLink
            className='link'
            to="/contact"
            exact
          >Contact</NavLink></div>

      </div>}

    </div>
  )
}

export default Navbar

