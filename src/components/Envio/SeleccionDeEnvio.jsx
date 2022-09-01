import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function SeleccionDeEnvio() {

  let [carrito, setCarrito] = useState();
  const [totalPrice, setTotalPrice] = useState(1);
  const [auxState, setAuxState] = useState("");

  function handlePrice() {
    let aux = 0;
    setAuxState(aux);
    carrito && carrito.map((p) => (aux += p.price * p.quantity));
    setTotalPrice(aux);
  }

  useEffect(() => {
    setCarrito(JSON.parse(localStorage.getItem("carrito")));
    handlePrice();
  }, [auxState]);
  
  return (
    <div>

      <Link to="/pago/envio1">
        <div > 
          <h3>Envio a San Nicolas y Mariano Moreno</h3>
          <h3> $150 </h3>
        </div>
      </Link>

      <Link to="/pago/envio2">
        <div > 
          <h3>Countries</h3>
          <h3> $200 </h3>
        </div>
      </Link>

      <Link to="/pago/retiro">
        <div >
          <div>
            <h3>Retiro en Tienda</h3>
            <h3> Gratis </h3>
          </div>
        </div>
      </Link>

      <div > 
      <h3>Pagás</h3>
      <h3> $ {totalPrice} </h3>
      </div>
    </div>
  )
}
