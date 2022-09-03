import React from "react";
// import Destacados from "../Destacados/Destacados";
import Empanadas from "./Empanadas/Empanadas";
import Pizza from "./Pizza/Pizza";
import Bebidas from "./Bebidas/Bebidas";
import Promociones from "./Promociones/Promociones";
// import Searchbar from "./Searchbar/Searchbar";
import { useAuth0 } from "@auth0/auth0-react";
import Milanesas from "./Milanesas/Milanesas";
import Lomo from "./Lomo/Lomo";
import Hamburguesas from "./Hamburguesas/Hamburguesas";
// import BigB from "./BigB/BigB";
// import Cart from "../Cart/Cart";
import style from "./ProductList.module.css";
import Carrousel from "./Carrousel/Carrousel";
import logo from "./logomayor.png";
import Categorias from "./Categorias/Categorias";
import Navbar from "../Navbar/Navbar";
import Footer from "../Home/Footer/Footer";

function ProductList() {
  const { isLoading } = useAuth0;

  if (isLoading) return <h1>...Loading</h1>;
  return (
    <div className={style.titulo}>
      <div className={style.container}>
        <div className={style.banner}>
          <img src={logo} />
        </div>
        <Carrousel />
        <Categorias />
        <Promociones />
        <Empanadas />
        <Pizza />
        <Milanesas />
        <Lomo />
        <Hamburguesas />
        {/* <BigB /> */}
        <Bebidas />
        <Navbar />
        <Footer />
      </div>
    </div>
  );
}

export default ProductList;
