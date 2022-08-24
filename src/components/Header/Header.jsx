import React from "react";
import style from "./Header.module.css";
import { SiGooglemaps } from "react-icons/si";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Header = () => {
  return (
    <div className={style.container}>
      <div className={style.subcontainer}>
        <SiGooglemaps />
        <div className={style.direccion}>
          <p>Los Principios 137- Villa San Nicolas</p>
        </div>
        <BsTelephoneFill />
        <div className={style.numero}>
          <p>+54 3541 23-2555</p>
        </div>
        <MdEmail />
        <div className={style.correo}>
          <p> pistachosGC@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
