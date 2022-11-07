import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { _id, name, price } = useLoaderData();
  console.log(name);
  return (
    <div>
      <h1>This is service Details{name}</h1>
    </div>
  );
};

export default ServiceDetails;
