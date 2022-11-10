import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hooks/UseTitle';
import Service from '../Service/Service';


const Services = () => {
  useTitle('Services');
 const [services, setServices] = useState([]);
 useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then(res =>res.json())
    .then(data => setServices(data))
 },[])
 const sort = services.slice(0,3)
    return (
        <div className='bg-gold-500'>
            <h1 className='text-4xl text-center '>Choose your desire service</h1>
          <div className='  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap'>
            {
                sort.map(service =><Service
                key={service._id}
                service={service}
                ></Service>)
            }
          </div>
      
        </div>
    );
};

export default Services;