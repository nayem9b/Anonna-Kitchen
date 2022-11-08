import React from "react";
import Footer from "../../Footer/Footer";
import Cards from "../Cards/Cards";
import Tagline from "../Content/Tagline/Tagline";
import SeeAllButton from "./SeeAllButton/SeeAllButton";

const Home = () => {
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
