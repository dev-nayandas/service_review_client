import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const EditReview = () => {
    const {user} = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault();
  
        const form = event.target;
        const reviewerName = form.name.value;
        const email = user?.email;
        const img = form.img.value;
        const reviewText = form.reviewText.value;
     
        const reviews = {
        
        
            reviewerName,
            email,
            img,
            reviewText
  
        }
        console.log(reviews)}
    return (
        <div>
          
            <div className='text-black'>
              <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col">
                            <div className="text-center lg:text-left">
                                <h1 className="text-5xl font-bold">Edit the  Review</h1>
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
                                        <input type="email"  placeholder="name" className="input input-bordered" defaultValue={user?.email} readOnly required />
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
                                        <input type="text" name='reviewText' placeholder="description" className="input input-bordered" required />
                                     
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Edit the Review</button>
                                    </div>
                                </form>
                              
                            </div>
                        </div>
                    </div>
              </div>
        </div>
    );
};

export default EditReview;