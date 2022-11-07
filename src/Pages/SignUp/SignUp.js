import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
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
                      <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="name" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo url</span>
                    </label>
                    <input type="text" placeholder="photourl" className="input input-bordered" />
                  </div>
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
                    <input type="password" placeholder="password" className="input input-bordered" />
                    <label className="label">
                      
                      <p  className="label-text-alt link link-hover">Already have an account? <Link className='text-blue-800' to="/login">Login</Link> </p>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign Up</button>
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

export default SignUp;