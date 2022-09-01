import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { postOrden } from "../../redux/action";

export default function SeleccionDePago() {

  const dispatch = useDispatch()

  let [carrito, setCarrito] = useState();
  const [totalPrice, setTotalPrice] = useState(1);
  const [auxState, setAuxState] = useState("");

    function cartSubmit() {
    let productos = carrito.map((p) => {
      return {
        productId: p.id,
        amount: p.price * p.quantity,
        quantity: p.quantity,
      };
    });

    const payload = {
      shipping : "Envio a domicilio",
      metodoDePago : "Mercado Pago",
      productos
    }
    dispatch(postOrden(payload))
  }

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

      <Link to="/formulario"
      onClick={e => cartSubmit()}>
        <div > 
          <h3>Envio a San Nicolas y Mariano Moreno</h3>
          <h3> $150 </h3>
        </div>
      </Link>

      <Link to="/formulario"
      onClick={e => cartSubmit()}>
        <div > 
          <h3>Countries</h3>
          <h3> $200 </h3>
        </div>
      </Link>

      <Link to="/confirmacion">
        <div >
          <div>
            <h3>Retiro en Tienda</h3>
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
