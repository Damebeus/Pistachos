import React from "react";
import style from "./Footer.module.css";
import carrito from "./carrito.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.imagen}>
        <Link to='/cart'>
          <img src={carrito} />
        </Link>
        {/*     <h3>Carrito</h3> */}
      </div>
    </div>
  );
};

export default Footer;
