import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            
          <div className="hero min-h-screen bg-base-200">
            
  <div className="hero-content flex-col lg:flex-row">
    
    <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-3305943-2757111.png" className="max-w-sm rounded-lg shadow-2xl" />
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            
            <p  className="label-text-alt link link-hover">New to Dr. Smith? <Link className='text-blue-800' to="/signup">Sign Up</Link> </p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
</div>
        </div>
    );
};

export default Login;