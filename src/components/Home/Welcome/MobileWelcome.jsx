import React from "react";
import style from "./MobileWelcome.module.css";
import { Link } from "react-router-dom";
import logo from "./logoHoja.png";
import titulo from "./titulo.png";
import down from "./footer.png";
const MobileWelcome = () => {
  return (
    <div className={style.container}>
      <div className={style.imagen}>{<img src={logo} alt='' />}</div>
      <div className={style.titulo}>
        <img src={titulo} alt='' />
        {/*    <h1>Pistachos</h1> */}
      </div>
      <div className={style.subtitulo}>
        <h2>MENU</h2>
      </div>
      <div className={style.boton}>
        <Link to='/tutorial'>
          <button>Realizar pedido</button>
        </Link>
      </div>
      <div className={style.footer}>
        <img src={down} alt='' />
      </div>
    </div>
  );
};

export default MobileWelcome;
