import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__container'>
        <div className='leftpart'>Logo</div>
        <div className='rightpart'>
          <NavLink
            className='navbar__item'
            to='/'
            exact>
            Home
          </NavLink>
          <NavLink
            className='navbar__item'
            to='/service'
            exact>
            Service
          </NavLink>
          <NavLink
            className='navbar__item'
            to='/contact'
            exact>
            Contact
          </NavLink>
          <NavLink
            className='navbar__item'
            to='/about'
            exact>
            About
          </NavLink>

        </div>
      </div>
    </div>
  )
}

export default Navbar
