import React, { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import Cards from "../Cards/Cards";
import Tagline from "../Content/Tagline/Tagline";
import useTitle from "../Hooks/UseTitle";
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
      <Cards></Cards>
      <SeeAllButton></SeeAllButton>
      {newService.map((newsrv) => (
        <UserAddedService key={newsrv._id} newsrv={newsrv}></UserAddedService>
      ))}

      <Footer></Footer>
    </div>
  );
};

export default Home;
