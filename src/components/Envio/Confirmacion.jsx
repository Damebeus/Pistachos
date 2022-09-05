import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderById, getEnvioById} from "../../redux/action";

export default function Confirmacion() {

  const dispatch = useDispatch();

  const orden = useSelector((state) => state.orden);
  const envio = useSelector((state) => state.envio);

  useEffect(() => {
    dispatch(getOrderById(id));
    dispatch(getEnvioById(id));
  }, []);

      function copiarTexto(){
        let numOrd = document.getElementById("numero_orden").innerHTML        
        let barrio = document.getElementById("barrio").innerHTML
        let manzana = document.getElementById("manzana").innerHTML
        let lote = document.getElementById('lote').innerHTML
        let linea1 = document.getElementById("linea1").innerHTML
        let productos = document.getElementById("productos").innerHTML
        let producName = document.getElementById('pName').innerHTML
        let linea2 = document.getElementById("linea2").innerHTML
        let total = document.getElementById("total").innerHTML
        let metododePago = document.getElementById("metodo").innerHTML
        let linea3 = document.getElementById("linea3").innerHTML
        let tipoDeEnvio = document.getElementById("tipoDeEnvio").innerHTML

        let resultado = [numOrd,barrio,manzana,lote,linea1,productos,producName,linea2,total,metododePago,linea3,tipoDeEnvio]
        navigator.clipboard.writeText(resultado)
        alert('Texto Copiado ya puedes pegarlo por wsp')
      }

  return (
    <div>
        {envio === null ?(<p>loading</p>): 
        (
        <div>
            <br />
            <p id="numero_orden">Orden numero: {orden.id}</p>
            <p id="barrio">Barrio: {envio.barrio}</p>
            <p id="manzana">Manzana: {envio.manzana}</p>
            <p id="lote">Lote: {envio.lote}</p>
            <p id="linea1">-------------------------------------------------------</p>
            <p id="productos">Productos</p>
            {
                orden.products && orden.products.map(e => <p id="pName">{e.orderline.quantity} * {e.name}</p>)
            }
            <p id="linea2">--------------------------------------------------------</p>
            <p id="total">Total: $ {orden.totalprice}</p>
            <p id="metodo">Metodo de Pago: {orden.metodoDePago}</p>
            <p id="linea3">-------------------------------------------------------</p>
            <p id="tipoDeEnvio">Envio: {orden.shipping}</p>
            <button onClick={copiarTexto}>Copiar</button>
            <p></p>
            <button>wpp</button>
        </div>)}
    </div>
  )
}
