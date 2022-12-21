import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../../Hooks/UseTitle";
import Service from "../Service/Service";

const Services = () => {
  useTitle("Services");
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://service-review-assignment-11-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const sort = services.slice(0, 3);
  return (
    <div className="bg-gold-500">
      <h1 className="text-5xl text-center mt-5 mb-5 text-purple-800 ">
        Choose your desire service
      </h1>
      <div className="  grid grid-cols-01 md:grid-cols-3 lg:grid-cols-3 ">
        {sort.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
