import React from 'react';
import './SubNavbar.css'
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function SubNavbar() {
  const { user } = useAuth();

  return (
    <div className='navbar-containers'>
      <div className='navbar-containers-name'>
        {user ? (
          <div className='nameuser'>Welcome {user.name}</div>
        ) : (
          <div className='namesGuest'>Welcome Guest</div>
        )}
      </div>

      <div className='list-itemss'>
        <ul className='unordered-lists'>
          <Link to=''>
            <li>
              NEW ARRIVALS
            </li>
          </Link>
          <Link to=''>
            <li>HOME APPLIANCES</li>
          </Link>
          <Link to=''>
            <li>MOBILE PHONES</li>
          </Link>
          <Link to=''>
            <li>LAPTOPS</li>
          </Link>
          <Link to=''>
            <li>TABLETS</li>
          </Link>
          <Link to=''>
            <li>ACCESSORIES</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
