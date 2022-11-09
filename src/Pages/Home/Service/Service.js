import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Service = ({service}) => {
    console.log(service)
    const {_id,img,price,title, name} = service;
 
    return (
        <div className='border-2'>
           <div className="card w-96 bg-base-100 shadow-xl min-h-full rounded">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{title}</p>
    <div className="card-actions">
    <Link to={`/service/${_id}`}>
   <button className="btn btn-primary">View Details</button>
   </Link>
    </div>
  </div>
</div>

        </div>
    );
};

export default Service;