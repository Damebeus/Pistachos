import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Cart.module.css";


function Cart() {

  const [totalPrice, setTotalPrice] = useState(1);
  let [carrito, setCarrito] = useState();
  const [auxState, setAuxState] = useState("");
  let [count, setCount] = useState(0)

  function handlePrice() {
    let aux = 0;
    setAuxState(aux);
    carrito && carrito.map((p) => (aux += p.price * p.quantity));
    setTotalPrice(aux);
  }

  function changeAmount(product, boolean) {
    if (boolean) {
      setCount(count += 1)
      product.quantity += 1;
      handlePrice();
    } else {
      setCount(count -= 1)
      product.quantity -= 1;
      handlePrice();
    }
  }

  function removeProduct(product) {
    let array = carrito.filter((p) => p.id !== product.id);
    localStorage.setItem("carrito", JSON.stringify(array));
    setCarrito(array);
    let aux = 0;
    setAuxState(aux);
    array && array.map((p) => (aux += p.price * p.quantity));
    setTotalPrice(aux);
  }

  function cartSubmit() {
    let array = carrito.map((p) => {
      return {
        productId: p.id,
        amount: p.price * p.quantity,
        quantity: p.quantity,
      };
    });
  }

  useEffect(() => {
    setCarrito(JSON.parse(localStorage.getItem("carrito")));
    handlePrice();
  }, [auxState]);

  return(
    <>
      <div>
        <h1>Carrito de compra</h1>
      </div>

      <div className={style.containerproducts}>
        <div className={style.container}>
          {carrito?.length > 0 ? (
            carrito?.map((product) => {
              return (
                <div className={style.containerglobal} key={product.id}>
                  <div className={style.container2}>
                  <img src={product.img} alt={product.name} width='150px' height='130px' /> 
                    <div className={style.name}>
                      <label>{product.name}</label>
                    </div>

                    <div className={style.quantity}>
                    <button
                        onClick={() => changeAmount(product, false)}
                        disabled={product.quantity === 1 ? true : false}
                      >
                        -
                      </button>
                      <label>{product.quantity}</label>
                      <button
                        onClick={() => changeAmount(product, true)}
                      >
                        +
                      </button>
                    </div>
                    <div className={style.remover}>
                      <label>Remover</label>
                      <button onClick={() => removeProduct(product)}>x</button>
                    </div>
                    <div className={style.price}>
                      <label> ${product.price}</label>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className={style.ternario}>
              {" "}
              <h2>Aun no hay nada en tu carrito!</h2>
            </div>
          )}
        </div>
        <div className={style.priceTotal}>total price: {totalPrice}</div>

        <div>
          <button>
            <Link to='/envio'>SIGUIENTE</Link>
          </button>
        </div>
    </div>
    </>
  )
}

export default Cart;
