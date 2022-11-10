import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/UseTitle';

const Login = () => {
    const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  useTitle('Login')
  const from = location.state?.from?.pathname || '/'
  
  const {signIn,googleSignIn} = useContext(AuthContext);
  // const {googleSignIn} = useContext{AuthContext}
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSubmit = () =>{
    console.log('hello')
    googleSignIn(googleProvider)
    .then(result =>{
      const user = result.user;
      console.log(user.email)
      navigate('/home')
    })
    .catch(error =>{
      console.error(error);
      setError(error.message)
    })
  }

  
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email , password)
        signIn(email, password)
        .then(result =>{
          const user = result.user;
          console.log(user)
          form.reset()
          // setError('')
          navigate(from, {replace:true})
        })
        .catch(error =>{
          console.error(error);
          setError(error.message)
        })

        
    }
    return (



        
        <div>
          
            <form onSubmit={handleSubmit} className="hero min-h-screen bg-base-200">
              
              <div className="hero-content flex-col lg:flex-row-reverse">
              
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <div className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input type="text" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input type="password" name='password' placeholder="password" className="input input-bordered" />
                      <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                      </label>
                      <label className="label">
                        <p> New to Dr. Smith? </p><a href="./signup" className="label-text-alt link link-hover">Register Now</a>
                      </label>
                    
                    </div>
                    <div className="form-control mt-6">
                      <button onSubmit={handleSubmit} className="btn btn-primary">Login</button>
                    </div>
                    <div className="form-control mt-6">
                    <button onClick={handleGoogleSubmit} className="btn btn-primary  mb-8 ">Google Login</button>
                    </div>
                  </div>
                </div>
              </div>
              <from className='text-red-500'>
                {error}
              </from>
             
            </form>
            
         
         
        </div>
    );
};

export default Login;