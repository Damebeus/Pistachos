import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, } from "react-redux";
import { postOrden } from "../../redux/action";

export default function SeleccionDePago() {

  const {envio} = useParams()

  let shipping = null

  const dispatch = useDispatch()
  
  let metodoDePago = null
  
  let [carrito, setCarrito] = useState();
  
  function cartSubmit() {
    let productos = carrito.map((p) => {
      if(envio === "envio1") {
        shipping = "Envio a San Nicolas/Mariano Moreno"
      }else if(envio === "envio2"){
        shipping = "Envio a Countries"
      }else{
        shipping = "Retiro en Tienda"
      }
      return {
        productId: p.id,
        amount: p.price * p.quantity,
        quantity: p.quantity,
      };
    });

    const payload = {
      shipping,
      metodoDePago,
      productos
    }
    dispatch(postOrden(payload))
  }

  const checkbox1 = document.getElementById("Efectivo");
  const checkbox2 = document.getElementById("Mercado Pago");
  const checkbox3 = document.getElementById("Transferencia");
  
  function getValue () {
    if(checkbox1.checked === true){
      metodoDePago = checkbox1.value
    }if(checkbox2.checked === true){
      metodoDePago = checkbox2.value
    }if(checkbox3.checked === true){  
      metodoDePago = checkbox3.value
    }
    
  }

  function uncheck(){
    checkbox1.onclick = function(){
    if(checkbox1.checked != false){
       checkbox2.checked =null;
       checkbox3.checked =null;
    }
}
checkbox2.onclick = function(){
    if(checkbox2.checked != false){
        checkbox1.checked=null;
        checkbox3.checked =null;
    }
  }

  checkbox3.onclick = function(){
    if(checkbox3.checked != false){
       checkbox2.checked =null;
       checkbox1.checked =null;
    }
}
}

useEffect(() => {
  setCarrito(JSON.parse(localStorage.getItem("carrito")));
},[]);

  return (
    <div>
      <div>
        <h2>
        Selecion Del Metodo De Pago
        </h2>
      </div>
      <div>
        <label>
          Efectivo <input id="Efectivo" type="radio" value="Efectivo" onClick={e => {uncheck()
                                                                                    getValue()}}
                                                                                    required />
        </label>
      </div>

      <div>
        <label>
          Mercado Pago <input id="Mercado Pago" type="radio" value="Mercado Pago" onClick={e => {uncheck()
                                                                                                getValue()}}
                                                                                                required />
        </label>
      </div>

      <div>
        <label>
          Transferencia <input id="Transferencia" type="radio" value="Transferencia" onClick={e => {uncheck()
                                                                                                    getValue()}}
                                                                                                    required />
        </label>
      </div>

      <div>
        <br/>
        <Link to="/envio">
        <button>ATRÁS</button>
        </Link>
        <br/>
        <br/>
        <Link to="/formulario">
        <button onClick={e => cartSubmit()}>SIGUIENTE</button>
        </Link>
      </div>
    </div>

  )
}
