import React from "react";
import style from "./Categorias.module.css";
import pizza from "./Assets/pizza.png";
import burguer from "./Assets/burguer.png";
import empanadas from "./Assets/empanada.png";
import bebidas from "./Assets/bebida.png";
import lomitos from "./Assets/lomito.png";
import sanguche from "./Assets/sanguche.png";
import { Link } from 'react-scroll';


const Categorias = () => {
  return (
    <div className={style.todo}>
      <div className={style.titulo}>
        <h2>Categorias</h2>
      </div>
      <div className={style.container}>
        <div className={style.item}>
          <img src={pizza} alt="none"/>
          <Link to='pizza'>
          <span>Pizza</span>
          </Link>
        </div>
        <div className={style.item}>
          {" "}
          <img src={empanadas} alt="none"/>
          <Link to='empanadas'>
          <span>Empanadas</span>
          </Link>
        </div>
        <div className={style.item}>
          {" "}
          <img src={burguer} alt="none"/>
          <Link to='burguer'>
          <span>Burguers</span>
          </Link>
        </div>
        <div className={style.item}>
          {" "}
          <img src={lomitos} alt="none"/>
          <Link to="lomitos">
          <span>Lomitos</span>
          </Link>
        </div>
        <div className={style.item}>
          {" "}
          <img src={sanguche} alt="none" />
          <Link to='sanguches'>
          <span>Sanguches</span>
          </Link>
        </div>
        <div className={style.item}>
          {" "}
          <img src={bebidas} alt="none"/>
          <Link 
          to="Bebidas"
          duration={0}>
          <span>Bebidas</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categorias;
