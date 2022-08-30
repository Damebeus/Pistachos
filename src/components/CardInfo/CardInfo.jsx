import React, { useEffect, useState } from "react";
import style from "./CardInfo.module.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function CardInfo(product) {


  const [carrito, setCarrito] = useState([]);

  const tuMami = product

  function handleProduct(product) {
    console.log(product)
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
  }, []);


  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <div className={style.columna}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <span>{"$" + product.price}</span>
          <Link to={`admin/products/${product.id}`}>
          <button >
            Editar Producto
          </button>
          </Link>
        </div>
        <div className={style.imagen}>
          <img src={product.img} alt={product.name} width='150px' height='130px' />
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
