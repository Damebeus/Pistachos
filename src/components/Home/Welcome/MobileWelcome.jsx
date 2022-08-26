import React from "react";
import style from "./MobileWelcome.module.css";
import { Link } from "react-router-dom";
import logo from "./logopista.png";
import bg from "./bgi.png";
const MobileWelcome = () => {
  return (
    <div className={style.container}>
      {/*     <div className={style.bgi}>
        <img src={bg} alt='' />
      </div> */}
      <div className={style.titulo}>
        <h1>Pistachos</h1>
      </div>
      <div className={style.imagen}>
        <img src={logo} alt='' />
      </div>
      <div className={style.subtitulo}>
        <h2>¡Productos de primera calidad!</h2>
      </div>
      <div className={style.boton}>
        <Link to='/listado'>
          <button>Realizar pedido</button>
        </Link>
      </div>
    </div>
  );
};

export default MobileWelcome;
