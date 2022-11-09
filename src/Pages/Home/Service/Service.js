import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Service = ({service}) => {
    console.log(service)
    const {_id,img,price,title, name} = service;
 
    return (
        <div className='border-2'>
           <div className="card w-96 bg-base-100 shadow-xl min-h-full rounded">
  <figure className="px-10 pt-10">
  <PhotoProvider>
        <PhotoView  src={img}>
            <img  src={img} alt="" />
        </PhotoView>
    </PhotoProvider>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>Fee :{price}</p>
    <p>{title.slice(0,100)}</p>
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