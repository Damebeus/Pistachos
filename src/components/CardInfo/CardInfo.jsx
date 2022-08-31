import React, { useEffect, useState } from "react";
import style from "./CardInfo.module.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function CardInfo(product) {
  const [carrito, setCarrito] = useState([]);
  let [count, setCount] = useState(0);
  let [producto, setProducto] = useState({});

  function changeAmount(product, boolean) {
    if (boolean) {
      setCount((count += 1));
      product.quantity += 1;
    } else {
      setCount((count -= 1));
      product.quantity -= 1;
    }
  }

  function handleProduct(product) {
    if (!localStorage.getItem("carrito")) {
      let a = [];
      a.push(product);
      localStorage.setItem("carrito", JSON.stringify(a));
      Swal.fire(
        "Producto agregado al carrito!",
        "Revisa tu carro de compras",
        "success"
      );
    } else {
      let a = [];
      a = JSON.parse(localStorage.getItem("carrito") || []);
      let repetido = a.find((e) => product.id == e.id);
      if (!repetido) {
        a.push(product);
        localStorage.setItem("carrito", JSON.stringify(a));
        Swal.fire(
          "Producto agregado al carrito!",
          "Revisa tu carro de compras",
          "success"
        );
      } else {
        Swal.fire("Este producto ya ha sido agregado", "", "error");
      }
    }
  }

  useEffect(() => {
    setCarrito(JSON.parse(localStorage.getItem("carrito")));
    setProducto((producto = { ...product }));
  }, []);

  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <div className={style.columna}>
          <div className={style.titulo}>
            <h2>{product.name}</h2>
          </div>
          <p>{product.description}</p>
          <span>{"$" + product.price}</span>  
            <button onClick={() => handleProduct(producto)}>
              Agregar al carrito
            </button>
        </div>
        <div className={style.columna2}>
          <div className={style.imagen}>
            <img
              src={product.img}
              alt={product.name}
              width='150px'
              height='130px'
            />
          </div>

          <div className={style.count}>
            <button
              onClick={() => {
                changeAmount(producto, false);
              }}
              disabled={producto.quantity === 1 ? true : false}
            >
              <label>-</label>
            </button>

            <label>{producto.quantity}</label>
            <button
              onClick={() => {
                changeAmount(producto, true);
              }}
            >
              <label>+</label>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
