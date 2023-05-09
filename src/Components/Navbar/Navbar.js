import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
    
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

      </div>


    </div>
  )
}

export default Navbar

