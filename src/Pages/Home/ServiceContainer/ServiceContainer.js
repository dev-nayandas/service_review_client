import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';

const ServiceContainer = () => {
    const [services, setServices] = useState([]);
 useEffect(()=>{
    fetch('https://service-review-assignment-11-server.vercel.app/services')
    .then(res =>res.json())
    .then(data => setServices(data))
 },[])
    return (
        <div className='bg-gold-500'>
            <h1 className='text-4xl text-center '>Choose your desire service</h1>
          <div className='  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap'>
            {
                services.map(service =><ServiceCard
                key={service._id}
                service={service}
                ></ServiceCard>)
            }
          </div>
      
        </div>
    );
};

export default ServiceContainer;