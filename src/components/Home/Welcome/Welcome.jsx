import React from "react";
import style from "./Welcome.module.css";
const Welcome = () => {
  return (
    <div className={style.container}>
      <div className={style.subcontainer}>
        <div className={style.titulo}>
          <h1>Pistachos Gustos Caseros</h1>
        </div>
        <div className={style.subtitulo}>
          <p>
            Nos ubicamos en{" "}
            <a href='#' class='resaltar'>
              Villa San Nicolas
            </a>{" "}
            ,Y contamos con envio a las{" "}
            <a href='#' class='resaltar'>
              zonas aledañas
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
