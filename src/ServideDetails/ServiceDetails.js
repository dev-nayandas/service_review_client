import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

const ServiceDetails = () => {
  const {user} = useContext(AuthContext);
    const service = useLoaderData()
    const {_id,img,price,title, name} = service;
    console.log(service)

    const handleSubmit = event => {
      event.preventDefault();

      const form = event.target;
      const name = form.name.value
      const img = form.img.value;
      const title = form.title.value;
      console.log(title ,img, price, name);
      const review = {
          name,
          img,
          title,

      }
      console.log(review)
    }
     



    return (
     <div className='text-white justify-center'>
            <div className="hero min-h-screen bg-purple-800">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img} className="max-w-lg rounded-lg shadow-2xl" />
              <div>
                <h1 className="text-5xl font-bold">{name}</h1>
                <h3 className="text-2xl font-bold">{price}</h3>
                <p className="py-6">{title}</p>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
            </div>




  
{
         user?.email?
              <div className='text-black'>
              <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col">
                            <div className="text-center lg:text-left">
                                <h1 className="text-5xl font-bold">Add a Review</h1>
                            </div>
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <form onSubmit={handleSubmit} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="name" placeholder="name" className="input input-bordered" defaultValue={user?.email} readOnly required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Image Url</span>
                                        </label>
                                        <input type="text" name="img" placeholder="imageUrl" className="input input-bordered" required />
                                    </div>
                                 
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Description</span>
                                        </label>
                                        <input type="text" name='title' placeholder="description" className="input input-bordered" required />
                                     
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Add Review</button>
                                    </div>
                                </form>
                              
                            </div>
                        </div>
                    </div>
              </div>

              : <h1 className='text-blue-800 text-4xl text-center mt-5 mb-5'>Please Login to Add a Review <Link to="/login" className="link link-secondary">Login</Link></h1>
            }
  
 


        </div>
    );
};

export default ServiceDetails;