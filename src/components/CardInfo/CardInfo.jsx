import React, { useState } from "react";
import { AddToCart } from "../../redux/action";
import { useDispatch } from "react-redux";
import style from "./CardInfo.module.css";
function CardInfo({ img, name, price, description }) {
  const [cart, setCart] = useState([]);

  const dispatch = useDispatch();

  function addToCart(id) {
    dispatch(AddToCart(id));
    setCart([...cart]);
  }
  return (
    <div className={style.container}>
      <div className={style.subContainer}>
        <div className={style.columna}>
          <h2>{name}</h2>
          <p>{description}</p>
          <span>{"$" + price}</span>
          <button onClick={() => addToCart(AddToCart)}>
            Agregar al carrito
          </button>
        </div>
        <div className={style.imagen}>
          <img src={img} alt={name} width='150px' height='130px' />
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
