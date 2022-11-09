import React from "react";
import Footer from "../../Footer/Footer";
import Cards from "../Cards/Cards";
import Tagline from "../Content/Tagline/Tagline";
import useTitle from "../Hooks/UseTitle";
import SeeAllButton from "./SeeAllButton/SeeAllButton";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Tagline></Tagline>
      <Cards></Cards>
      <SeeAllButton></SeeAllButton>
      <Footer></Footer>
    </div>
  );
};

export default Home;
