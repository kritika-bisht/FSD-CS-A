import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <div className='navBar'>
     
       <Link to="/Welcome" className='link-style'>Welcome |</Link>
       <Link to="/User" className='link-style' >User |</Link>
       <Link to="/cart" className='link-style'>View Cart |</Link>
       <Link to="/order" className='link-style' >View Orders |</Link>
       <Link to="/" className='link-style'>Home |</Link>
       <Link to="/logout" className='link-style'>Logout |</Link>
    </div>
  )
}

export default NavBar
