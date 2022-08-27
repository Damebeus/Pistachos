import React, { useState } from "react";
import {AddToCart} from "../../redux/action"
import {useDispatch} from 'react-redux'
function CardInfo({ img,name,price,description }) {
  const [cart,setCart] = useState([])

  const dispatch = useDispatch();

  function addToCart(id) {
    dispatch(AddToCart(id));
    setCart([...cart]);
  }
  return (
    <div>
      <div>
        <img src={img} alt={name} width="150px" height="100px" />
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
          <span>{"$ " + price}</span>
          <button onClick={()=> addToCart(AddToCart)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
