import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/UseTitle';
import ReviewTable from './ReviewTable/ReviewTable';

const MyReviews = () => {
    useTitle('My Reviews');
    const {user} = useContext(AuthContext);

    const [myReviews, setMyReviews] = useState([])
    useEffect(()=>{
      fetch(`https://service-review-assignment-11-server.vercel.app/reviews/?email=${user.email}`)
      .then(res=>res.json())
      .then(data=>{
        setMyReviews(data)
        console.log(data)
      })
    },[])

    const noReview = parseFloat(myReviews.length) === 0;
    return (
        <div className='mb-5'>
            <h1 className='text-5xl mt-5 text-center mb-5 text-purple-800'>All of your reviews are here </h1>


            {
              noReview?
              <h1 className=' text-5xl mt-5 text-center mb-5 text-red-800' >No reviews are added</h1>
              :

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              {
                  myReviews.map(review =><ReviewTable
                  key={review._id}
                  review={review}
                  ></ReviewTable>)
              }
              </div>


              
            }
            
           
        </div>
    );
};

export default MyReviews;