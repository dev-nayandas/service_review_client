import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
  <div className="navbar-start">
    
    <a className="btn btn-ghost normal-case text-xl">Dr. Smith</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">

        <Link className='link' to='/home'>Home</Link>
        <Link className='link' to='/login'>Login</Link>
      
      
    </ul>
  </div>
  
</div>
        </div>
    );
};

export default Header;