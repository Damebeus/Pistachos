import React from "react";
import Destacados from "../Destacados/Destacados";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Welcome from "../Welcome/Welcome";
const Home = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <Navbar/>
      
      <Destacados />

    </div>
  );
};

export default Home;
