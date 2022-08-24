import React from "react";
import style from "./Welcome.module.css";
const Welcome = () => {
  return (
    <div className={style.container}>
      <div className={style.subcontainer}>
        <div className={style.titulo}>
          <h1>Pistachos Gustos Caseros</h1>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
