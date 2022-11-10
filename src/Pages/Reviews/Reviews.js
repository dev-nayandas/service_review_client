import React from 'react';

const Reviews = ({review}) => {
    console.log(review)
    const {img, reviewText, reviewerName} = review;
    return (
        <div>
          
            <div>
            <div className='text-brown-800 bg-base-100'>
         
         <div className="overflow-x-auto w-full">
         <table className="table w-full">

     <thead className='text-black'>
  
     </thead>
 <tbody>

  

 
   
   <tr className='text-black'>
     <th>
       <label>
         <input type="button" className="checkbox" />
       </label>
     </th>
     <td>
       <div className="flex items-center space-x-3">
         <div className="avatar">
           <div className="mask mask-squircle w-12 h-12">
             <img src={img} alt="Avatar Tailwind CSS Component" />
           </div>
         </div>
         <div>
           <div className="font-bold">{reviewerName}</div>
           
         </div>
       </div>
     </td>
     <td>
   
       <span className="badge badge-ghost badge-sm">{reviewText}</span>
     </td>
     <td>Crimson</td>
    
   </tr>
  
 
 </tbody>


 
</table>
</div>
     </div>
            </div>
        </div>
    );
};

export default Reviews;