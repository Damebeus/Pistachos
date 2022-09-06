import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./SeleccionDeEnvio.module.css";
import logo from "./logo.png";

export default function SeleccionDeEnvio() {
  let [carrito, setCarrito] = useState();
  const [totalPrice, setTotalPrice] = useState(1);
  const [auxState, setAuxState] = useState("");

  function handlePrice() {
    let aux = 0;
    setAuxState(aux);
    carrito && carrito.map((p) => (aux += p.price * p.quantity));
    setTotalPrice(aux);
  }

  useEffect(() => {
    setCarrito(JSON.parse(localStorage.getItem("carrito")));
    handlePrice();
  }, [auxState]);

  return (
    <div>
      <div className={style.banner}>
        <div className={style.titulo}>
          <h1>Modo de envio</h1>
        </div>
        <img src={logo} />
      </div>

      <div className={style.card}>
        <div className={style.contenido}>
          <h3>San Nicolas y Mariano Moreno</h3>
          <h2> $150 </h2>
          <Link to='/pago/envio1'>
            <button>
              <span>Continuar</span>
            </button>
          </Link>
        </div>
      </div>
      <div className={style.card}>
        <div className={style.contenido}>
          <h3>Countries</h3>
          <h2> $200 </h2>
          <Link to='/pago/envio2'>
            <button>
              <span>Continuar</span>
            </button>
          </Link>
        </div>
      </div>

      <div className={style.card}>
        <div className={style.contenido}>
          <h3>Retiro en Tienda</h3>
          <h2> Gratis </h2>
          <Link to='/pago/retiro'>
            <button>
              <span>Continuar</span>
            </button>
          </Link>
        </div>
      </div>

      {/* <div className={style.total}>
        <h3>Precio actual</h3>
        <h3> $ {totalPrice} </h3>
      </div> */}
      <div className={style.footer}>
        <Link to='/cart'>
          <button>
            <span>Atras</span>
          </button>
        </Link>

        <Link to='/listado'>
          <button>
            <span>Cancelar</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
