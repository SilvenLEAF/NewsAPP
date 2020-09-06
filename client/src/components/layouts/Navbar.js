import React from 'react'
import { NavLink } from 'react-router-dom'






function Navbar() {
  return (
    <>
      <ul className="sidenav" id="mobileNav">
          <li>
            <NavLink to="/" >Home</NavLink>
          </li>
          <li>
            <NavLink to="/user" >Profile</NavLink>
          </li>
          <li>
            <NavLink to="/" >Settings</NavLink>
          </li>
          <li>
            <NavLink to="/" >Bug Report</NavLink>
          </li>
          <li>
            <NavLink to="/" >About Us</NavLink>
          </li>
      </ul>
      
    </>
  )
}

export default Navbar
