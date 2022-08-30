import React from "react";
import style from "./Categorias.module.css";
import pizza from "./Assets/pizza.png";
import burguer from "./Assets/burguer.png";
import empanadas from "./Assets/empanada.png";
import bebidas from "./Assets/bebida.png";
import lomitos from "./Assets/lomito.png";
import sanguche from "./Assets/sanguche.png";

const Categorias = () => {
  return (
    <div className={style.todo}>
      <div className={style.titulo}>
        <h2>Categorias</h2>
      </div>
      <div className={style.container}>
        <div className={style.item}>
          <img src={pizza} />
          <span>Pizza</span>
        </div>
        <div className={style.item}>
          {" "}
          <img src={empanadas} />
          <span>Empanadas</span>
        </div>
        <div className={style.item}>
          {" "}
          <img src={burguer} />
          <span>Burguers</span>
        </div>
        <div className={style.item}>
          {" "}
          <img src={lomitos} />
          <span>Lomitos</span>
        </div>
        <div className={style.item}>
          {" "}
          <img src={sanguche} />
          <span>Sanguches</span>
        </div>
        <div className={style.item}>
          {" "}
          <img src={bebidas} />
          <span>Bebidas</span>
        </div>
      </div>
    </div>
  );
};

export default Categorias;
