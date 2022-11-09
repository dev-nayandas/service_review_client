import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData()
    const {_id,img,price,title, name} = service;
    console.log(service)
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
        </div>
    );
};

export default ServiceDetails;