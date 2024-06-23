import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from './Auth';
import './Navbar.css'

export default function Navbar() {
  const auth=useAuth()
  return (
    <div>
      <nav className='navbar'>
      <div className='linking'>
            <NavLink to='/'>Home</NavLink>
            {auth.user==='admin'&&<NavLink to='/admin'>Admin</NavLink>}
            <NavLink to='/services'>Services</NavLink>
            <NavLink to='/contactus'>Contact Us</NavLink>
            <NavLink to='/aboutus'>About Us</NavLink>
            <NavLink to='/users'>Users</NavLink>
            {!auth.user&&<NavLink to='/login'>Login</NavLink>}
            {!auth.user&&<NavLink to='/signup'>Signup</NavLink>}
        </div>
      </nav>
    </div>
  )
}