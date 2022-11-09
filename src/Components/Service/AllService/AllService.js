import React, { useEffect, useState } from "react";
import SingleCard from "../../Cards/SingleCard";
import useTitle from "../../Hooks/UseTitle";
import AllServiceCard from "./AllServiceCard";

const AllService = () => {
  useTitle("All Services");
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allservices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);
  return (
    <div>
      <section class=''>
        <div class=' grid grid-cols-4 gap-5 my-10 mx-auto md:flex-nowrap p-12'>
          {services.map((srv) => (
            <AllServiceCard srv={srv} key={srv._id}></AllServiceCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllService;
