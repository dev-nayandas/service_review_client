import React from "react";

const AboutSmith = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://images.pexels.com/photos/6303564/pexels-photo-6303564.jpeg?auto=compress&cs=tinysrgb&w=400" />
            </div>
          </div>
          <h1 className="text-5xl font-bold">About Dr. Smith</h1>
          <p className="py-6">
          Exercising compassion "is an essential component of good medical care in many situations and requires grounding in moral principles," Dr. Saunders stated, acknowledging that some people are innately disposed to be compassionate while others aren't. But those who aren't instinctively compassionate shouldn't throw in the towel. "Although our dispositions vary, compassion is a quality that can be developed in all of us."
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default AboutSmith;
