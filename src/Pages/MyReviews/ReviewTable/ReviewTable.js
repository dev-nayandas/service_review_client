import { info } from 'daisyui/src/colors';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const ReviewTable = ({review}) => {
  const {user} = useContext(AuthContext);
    console.log(review);
    const {_id,img, reviewText, reviewerName, serviceName} = review;
    const handleDelete = _id => {
        const procced = window.confirm('Are you sure you want to delete this review?');
        if(procced){
          fetch(`http://localhost:5000/reviews/${_id}`, {
            method: 'DELETE',

          })
          .then(res=>res.json() )
          .then(data =>{
            console.log(data)
          })

          
        }
    };
  
    return (
        <div>
            <div className="card w-96 bg-blue-300 shadow-xl mt-5">
  <figure><img className='rounded-full mt-5' style={{width:'100px' ,height:'100px'}} src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Service Name : {serviceName}
      
    </h2>
    <p>Review : {reviewText}</p>
    <div className="card-actions justify-end">
    <button onClick={() =>handleDelete(_id)} className="btn btn-secondary">Delete</button>
    <button className="btn btn-accent">Update</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ReviewTable;