import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SeleccioDeEnvio() {

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

      <Link to="/formulario">
        <div > 
          <h3>envio a san nicolas y mariano moreno</h3>
          <h3> $150 </h3>
        </div>
      </Link>

      <Link to="/formulario">
        <div > 
          <h3>countryes o otros</h3>
          <h3> $200 </h3>
        </div>
      </Link>

      <Link to="/confirmacion">
        <div >
          <div>
            <h3>Retiro en tienda</h3>
            <h3> Gratis </h3>
          </div>
          <div>
            <h6>Jerónimo del Barco esquina Los Principios, Villa San Nicolas, Cordoba</h6>
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
