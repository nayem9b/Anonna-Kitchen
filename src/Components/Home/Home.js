import React, { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import Cards from "../Cards/Cards";
import Tagline from "../Content/Tagline/Tagline";
import useTitle from "../Hooks/UseTitle";
import Testimonials from "../Testimonials/Testimonials";
import UserAddedService from "../UserAddedService/UserAddedService";
import SeeAllButton from "./SeeAllButton/SeeAllButton";

const Home = () => {
  const [newService, setNewService] = useState([]);
  console.log(newService);
  useEffect(() => {
    fetch(`http://localhost:5000/newservices`)
      .then((res) => res.json())
      .then((data) => setNewService(data));
  }, []);

  useTitle("Home");
  return (
    <div>
      <Tagline></Tagline>
      <div className='grid grid-cols-3'>
        <Cards></Cards>
      </div>

      <div className='text-center'>
        <SeeAllButton></SeeAllButton>
      </div>

      <h1 className='text-4xl font-bold text-center mb-6 mt-6'>
        {" "}
        User Added Service is here
      </h1>
      <div className='grid grid-cols-4 gap-7'>
        {newService.map((newsrv) => (
          <UserAddedService key={newsrv._id} newsrv={newsrv}></UserAddedService>
        ))}
      </div>

      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
};

export default Home;
