import React from "react";
import Destacados from "../Destacados/Destacados";
import Empanadas from "./Empanadas/Empanadas";
import Pizza from "./Pizza/Pizza";
import Bebidas from "./Bebidas/Bebidas";
import Searchbar from "./Searchbar/Searchbar";
import { useAuth0 } from "@auth0/auth0-react";
import Milanesas from "./Milanesas/Milanesas";
import Lomo from "./Lomo/Lomo";
import Hamburguesas from "./Hamburguesas/Hamburguesas";
import BigB from "./BigB/BigB";
import style from "./ProductList.module.css";

import Cart from "../Cart/Cart";

import Carrousel from "./Carrousel/Carrousel";
import Promociones from "./Promociones/Promociones";


function ProductList() {
  const { isLoading } = useAuth0;

  if (isLoading) return <h1>...Loading</h1>;
  return (
    <div className={style.titulo}>
        <img src='' alt='' />
        <h1>Pistachos</h1>
        <div className={style.search}>
          <Searchbar />
        </div>
      <div className={style.container}>
        <Carrousel />
        <Promociones/>
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
