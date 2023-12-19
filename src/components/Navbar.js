import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Loginbg from '../assets/Logbag.png'


export default function Navbar() {
  return (
    <div className='navbar-container'>

      <div className='logo'>
        <img src={Loginbg} ></img>
        <Link to='/'>
        <h1>sanjay</h1>
        </Link>
      </div>

      <div className='list-items'>
        <ul className='unordered-list'>
          <Link to='/signup'>
            <li>
            SIGN UP
            </li>
          </Link>
          <Link to='/login'>
            <li>LOGIN</li>
          </Link>
          <Link to='/about'>
            <li>ABOUT US</li>
          </Link>
          <Link to='/contact'>
            <li>CONTACT US</li>
          </Link>
          <div>
            <li><i class="fa-solid fa-cart-shopping"></i></li>
          </div>
        </ul>
      </div>

    </div>
  )
}
