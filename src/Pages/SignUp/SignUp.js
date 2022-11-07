
import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const {user, googleSignIn,createUser } = useContext(AuthContext);
    console.log(createUser)
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSubmit = () =>{
     
      console.log('hello')
      googleSignIn(googleProvider)
      .then(result =>{
        const user = result.user;
        
        console.log(user.email);
        
      })
      .catch(error =>{
        console.error(error);
      })
    }
    
    // console.log(createUser)
      const handleRegister = event =>{
          event.preventDefault();
          const form = event.target;
          const name = form.name.value;
          const photoURL = form.photoURL.value;
          const email = form.email.value;
          const password = form.password.value;
          // console.log(name,photoURL,email,password);
          createUser(email, password)
          .then(result=>{
            const user = result.user;
            navigate('/home')  
            console.log(user)
            form.reset()
          })
          .catch(error =>{
            console.error(error);
          })
  
          form.reset()
      }
      return (
         <div>
           <form onSubmit={handleRegister} className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input type="text" name='photoURL' placeholder="name" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                  
                  <label className="label">
                    <p>Already have and account? </p>   <a href="/login" className="label-text-alt link link-hover">Login Now</a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register Now</button>
                </div>
              </div>
            </div>
          </div>
          
        </form>
          
        <button onClick={handleGoogleSubmit} className="btn btn-primary mb-8 mr-2">Google Sign Up</button>  
              <button className="btn btn-primary mb-8">Git Hub Sign Up </button>  
         </div>
      );
  };
  

export default SignUp;