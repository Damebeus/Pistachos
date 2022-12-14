import React from "react";
import { Link } from "react-router-dom";
import style from "./Tutorial.module.css";
import three from "./paso3.png";
import two from "./paso2.png";
import one from "./paso1.png";
const Tutorial = () => {
  return (
    <div className={style.container}>
      <div className={style.titulo}>
        <h1>¿Como encargar?</h1>
      </div>
      <div className={style.subcontainer}>
        <div className={style.uno}>
          <img src={one} />
          <div className={style.text}>
            <p>
              ◻ Selecciona tus productos.
              <br />◻ Elige la cantidad y añadelos al carrito.
            </p>
          </div>
        </div>
        <div className={style.dos}>
          <img src={two} />
          <div className={style.text}>
            <p>
              ◻ Completa tus datos.
              <br />◻ Confirma tu pedido.
            </p>
          </div>
        </div>
        <div className={style.tres}>
          <img src={three} />
          <div className={style.text}>
            <p>
              ◻ Toca el boton Finalizar (esto copiara tu pedido en el
              portapapeles).
              <br />◻ Pega el mensaje en nuestro Whatsapp.
            </p>
          </div>
        </div>
        <div className={style.boton}>
          <Link to='/listado'>
            <button>Ir a la tienda</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
