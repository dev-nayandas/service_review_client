import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import './Header.css'

const Header = () => {
    const {user, logOut} = useContext(AuthContext);


    const handleSignOut= ()=>{
        logOut()
        .then(()=>{})
        .catch(error =>console.error(error))
     };
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
  <div className="navbar-start">
    
    <a className="btn btn-ghost normal-case text-xl">Dr. Smith</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">

        <Link className='link' to='/home'>Home</Link>
        <Link className='link' to='/blogs'>Blogs</Link>
      
       
        {
              user?.email?
         <div>
                 <Link className='link' to='/myreviews'>My Reviews</Link>
                 <Link className='link' to='/addService'>Add Service</Link>
              <Link onClick={handleSignOut} className="link">Log Out</Link>
         </div>

              : <Link className='link' to='/login'>Login</Link>
            }
      
      
    </ul>
  </div>
  
</div>
        </div>
    );
};

export default Header;