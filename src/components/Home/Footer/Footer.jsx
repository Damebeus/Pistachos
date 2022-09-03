import React from "react";
import style from "./Footer.module.css";
import carrito from "./carrito.png";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.imagen}>
        <img src={carrito} />
        {/*     <h3>Carrito</h3> */}
      </div>
    </div>
  );
};

export default Footer;
