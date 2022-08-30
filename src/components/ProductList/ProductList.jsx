import React from "react";
import Destacados from "../Destacados/Destacados";
import Empanadas from "./Empanadas/Empanadas";
import Pizza from "./Pizza/Pizza";
import Bebidas from "./Bebidas/Bebidas";
import Promociones from "./Promociones/Promociones";
import Searchbar from "./Searchbar/Searchbar";
import { useAuth0 } from "@auth0/auth0-react";
import Milanesas from "./Milanesas/Milanesas";
import Lomo from "./Lomo/Lomo";
import Hamburguesas from "./Hamburguesas/Hamburguesas";
import BigB from "./BigB/BigB";
import Cart from "../Cart/Cart";
import style from "./ProductList.module.css";
import Carrousel from "./Carrousel/Carrousel";
import burger from "./burger.png";
import logo from "./logomayor.png";
import Categorias from "./Categorias/Categorias";

function ProductList() {
  const { isLoading } = useAuth0;

  if (isLoading) return <h1>...Loading</h1>;
  return (
    <div className={style.titulo}>
      <div className={style.navbar}>
        <img src={burger}></img>
      </div>

      {/*   <h1>Pistacho</h1> */}
      {/*  <div className={style.search}>
      </div> */}

      <div className={style.container}>
        <div className={style.banner}>
          <img src={logo} />
        </div>
        <Searchbar />
        <Carrousel />
        <Categorias />
        <Promociones />
        <Empanadas />
        <Pizza />
        <Milanesas />
        <Lomo />
        <Hamburguesas />
        <BigB />
        <Bebidas />
      </div>
    </div>
  );
}

export default ProductList;
