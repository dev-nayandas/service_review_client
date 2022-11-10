import React from 'react';

const Hero = () => {
    return (
        <div>
          <h1 className='text-5xl text-center mt-5 mb-5 text-purple-800 '>Checkout latest health news</h1>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://images.pexels.com/photos/8413084/pexels-photo-8413084.jpeg?auto=compress&cs=tinysrgb&w=400" className="rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Latest News about health</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Vist My Blog</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Hero;