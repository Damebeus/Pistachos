import React from "react";
import Destacados from "../Destacados/Destacados";
import Header from "../Header/Header";
import Welcome from "./Welcome/Welcome";
const Home = () => {
  return (
    <div>
      <Header />
      <Welcome />
      <Destacados />
    </div>
  );
};

export default Home;
