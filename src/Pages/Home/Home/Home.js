import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../../Hooks/UseTitle';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Hero from '../Hero/Hero';
import Service from '../Service/Service';
import Services from '../Services/Services';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
           
            <Services></Services>
           <div className='text-center'>
           <button className="btn btn-warning  mt-8"><Link to='/serviceContainer'>See All</Link></button>
           </div>
            <Hero></Hero>
            <Contact></Contact>
          
        </div>
    );
};

export default Home;