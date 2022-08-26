import React, { useState } from "react";
import {AddToCart} from "../../redux/action"
import {useDispatch} from 'react-redux'
function CardInfo({ item }) {
  const [cart,setCart] = useState([])

  const dispatch = useDispatch()

  function addToCart (id){
    dispatch(AddToCart(id))
    setCart([...cart])
    console.log(id, `hola`)
  } 
  return (
    <div>
      <div>
        <img src={item.img} alt={item.name} width="150px" height="100px" />
        <div>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <span>{"$ " + item.price}</span>
          <button onClick={()=> addToCart(AddToCart)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
