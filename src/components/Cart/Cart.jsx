import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Cart.module.css";
import logo from "./logo.png";
function Cart() {
  const [totalPrice, setTotalPrice] = useState(1);
  let [carrito, setCarrito] = useState();
  const [auxState, setAuxState] = useState("");

  function changeAmount(product, boolean) {
    if (boolean) {
      carrito.find((e) => {
        if (e.id === product.id) {
          e.quantity += 1;
          localStorage.setItem("carrito", JSON.stringify(carrito));
        }
        handlePrice();
      });
    } else {
      carrito.find((e) => {
        if (e.id === product.id) {
          e.quantity -= 1;
          localStorage.setItem("carrito", JSON.stringify(carrito));
        }
        handlePrice();
      });
    }
  }

  function handlePrice() {
    let aux = 0;
    setAuxState(aux);
    carrito && carrito.map((p) => (aux += p.price * p.quantity));
    setTotalPrice(aux);
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

  useEffect(() => {
    setCarrito(JSON.parse(localStorage.getItem("carrito")));
    handlePrice();
  }, [auxState]);

  return (
    <div className={style.container}>
      <div className={style.banner}>
        <div className={style.titulo}>
          <h1>Carrito de compra</h1>
        </div>
        <img src={logo} />
      </div>

      <div className={style.containerproducts}>
        <div className={style.container}>
          {carrito?.length > 0 ? (
            carrito?.map((product) => {
              return (
                <div className={style.containerglobal} key={product.id}>
                  <div className={style.container2}>
                    <img
                      src={product.img}
                      alt={product.name}
                      width='100px'
                      height='100px'
                    />
                    <div className={style.info}>
                      <div className={style.columna1}>
                        <div className={style.name}>
                          <label>{product.name}</label>
                        </div>
                        <div className={style.price}>
                          <label>${product.price}</label>
                        </div>
                      </div>

                      <div className={style.quantity}>
                        <button
                          onClick={() => changeAmount(product, false)}
                          disabled={product.quantity === 1 ? true : false}
                        >
                          <span>-</span>
                        </button>
                        <label>{product.quantity}</label>
                        <button onClick={() => changeAmount(product, true)}>
                          <span>+</span>
                        </button>
                      </div>
                      <div className={style.remover}>
                        {/*     <label>Remover</label> */}
                        <button onClick={() => removeProduct(product)}>
                          ❌
                        </button>
                      </div>
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
        <div>
          <div className={style.footcontainer}></div>
          <div className={style.footer}>
            <Link to='/listado'>
              <button>
                <span>Atras</span>
              </button>
            </Link>

            <div className={style.priceTotal}>Precio total: ${totalPrice}</div>
            <Link to='/envio'>
              <button>
                <span>Siguiente</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
