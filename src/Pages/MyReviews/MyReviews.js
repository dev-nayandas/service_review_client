import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/UseTitle';
import ReviewTable from './ReviewTable/ReviewTable';

const MyReviews = () => {
    useTitle('My Reviews');

    const [myReviews, setMyReviews] = useState([])
    useEffect(()=>{
      fetch('http://localhost:5000/reviews')
      .then(res=>res.json())
      .then(data=>{
        setMyReviews(data)
        console.log(data)
      })
    },[])
    return (
        <div>
            <h1 className='text-5xl mt-5 text-center mb-5 text-purple-800'>All of your reviews are here </h1>
            {
                myReviews.map(review =><ReviewTable
                key={review._id}
                review={review}
                ></ReviewTable>)
            }
        </div>
    );
};

export default MyReviews;