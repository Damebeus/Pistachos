import React, { useState } from "react";
import { AddToCart } from "../../redux/action";
import { useDispatch } from "react-redux";
import style from "./CardInfo.module.css";
function CardInfo({ item }) {
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
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <span>{"$" + item.price}</span>
          <button onClick={() => addToCart(AddToCart)}>
            Agregar al carrito
          </button>
        </div>
        <div className={style.imagen}>
          <img src={item.img} alt={item.name} width='150px' height='130px' />
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
