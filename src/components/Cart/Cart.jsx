import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Cart.module.css";


function Cart() {

  const [totalPrice, setTotalPrice] = useState(1);
  const [carrito, setCarrito] = useState();
  const [auxState, setAuxState] = useState("");

  function handlePrice() {
    let aux = 0;
    setAuxState(aux);
    carrito && carrito.map((p) => (aux += p.price * p.count));
    setTotalPrice(aux);
  }

  function changeAmount(product, boolean) {
    if (boolean) {
      product.count += 1;
      handlePrice();
    } else {
      product.count -= 1;
      handlePrice();
    }
  }

  function removeProduct(product) {
    let array = carrito.filter((p) => p.id !== product.id);
    localStorage.setItem("carrito", JSON.stringify(array));
    setCarrito(array);
    let aux = 0;
    setAuxState(aux);
    array && array.map((p) => (aux += p.price * p.count));
    setTotalPrice(aux);
  }

  function cartSubmit() {
    let array = carrito.map((p) => {
      return {
        productId: p.id,
        amount: p.price * p.count,
        quantity: p.count,
      };
    });
  }

  useEffect(() => {
    setCarrito(JSON.parse(localStorage.getItem("carrito")));
    handlePrice();
  }, []);


  

  return <div>

    </div>;
}

export default Cart;
