import React from 'react';

const Contact = () => {
    return (
        <div>
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
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
         
        </div>
        <textarea className="textarea textarea-secondary" placeholder="Your Query"></textarea>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Contact</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Contact;