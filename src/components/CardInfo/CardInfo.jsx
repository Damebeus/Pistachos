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
      console.log("gracias loco por agregar uno", product);
    } else {
      setCount((count -= 1));
      product.quantity -= 1;
      console.log("que me sacas uno ", product);
    }
  }

  function handleProduct(product) {
    console.log("soy el localStorage", product);
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
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <span>{"$" + product.price}</span>
          <Link to={`admin/products/${product.id}`}>
          <button onClick={() => handleProduct(producto)}>
            Agregar al carrito
          </button>
          </Link>
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
                changeAmount(producto, true);
              }}
            >
              <label>+</label>
            </button>

            <label>{producto.quantity}</label>
            <button
              onClick={() => {
                changeAmount(producto, false);
              }}
            >
              <label>-</label>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
