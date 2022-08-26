import React from "react";
import Destacados from "../Destacados/Destacados";
import Header from "../Header/Header";

import Welcome from "./Welcome/Welcome";

import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <Navbar />

      <Destacados />
    </div>
  );
};

export default Home;
