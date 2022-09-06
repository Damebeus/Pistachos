import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderById, getEnvioById } from "../../redux/action";
import style from "./Confirmacion.module.css";

export default function Confirmacion() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const orden = useSelector((state) => state.orden);
  const envio = useSelector((state) => state.envio);

  useEffect(() => {
    dispatch(getOrderById(id));
    dispatch(getEnvioById(id));
  }, []);

  function copiarTexto() {
    let numOrd = document.getElementById("numero_orden").innerHTML;
    let barrio = document.getElementById("barrio").innerHTML;
    let manzana = document.getElementById("manzana").innerHTML;
    let lote = document.getElementById("lote").innerHTML;
    let linea1 = document.getElementById("linea1").innerHTML;
    let productos = document.getElementById("productos").innerHTML;
    let producName = document.getElementById("pName").innerHTML;
    let linea2 = document.getElementById("linea2").innerHTML;
    let total = document.getElementById("total").innerHTML;
    let metododePago = document.getElementById("metodo").innerHTML;
    let linea3 = document.getElementById("linea3").innerHTML;
    let tipoDeEnvio = document.getElementById("tipoDeEnvio").innerHTML;

    let resultado = [
      numOrd,
      barrio,
      manzana,
      lote,
      linea1,
      productos,
      producName,
      linea2,
      total,
      metododePago,
      linea3,
      tipoDeEnvio,
    ];
    navigator.clipboard.writeText(resultado);
    alert("Texto Copiado, ya puedes pegarlo por wsp");
  }

  return (
    <div>
      {envio === null ? (
        <p>loading</p>
      ) : (
        <div>
          <div className={style.banner}>
            <div className={style.titulo}>
              <h1>Confirma tu pedido</h1>
            </div>
          </div>
          <div className={style.container}>
            <div className={style.columna}>
              <h2 id='numero_orden'>Orden numero: </h2>
              <p>{orden.id}</p>
            </div>
            <div className={style.columna}>
              <h2 id='barrio'>Barrio: </h2>
              <p>{envio.barrio}</p>
            </div>
            <div className={style.columna}>
              <h2 id='manzana'>Manzana: </h2>
              <p>{envio.manzana}</p>
            </div>
            <div className={style.columna}>
              <h2 id='lote'>Lote:</h2>
              <p> {envio.lote}</p>
            </div>
            <p id='linea1'>
              -------------------------------------------------------
            </p>
            <div className={style.subtitulo}>
              <h2 id='productos'>Productos</h2>
            </div>

            {orden.products &&
              orden.products.map((e) => (
                <p id='pName'>
                  {e.orderline.quantity} * {e.name}
                </p>
              ))}

            <p id='linea2'>
              --------------------------------------------------------
            </p>
            <div className={style.columna}>
              <h2 id='total'>Total:</h2>
              <p> $ {orden.totalPrice}</p>
            </div>

            <div className={style.columna}>
              <h2 id='metodo'>Metodo de Pago:</h2>
              <p> {orden.metodoDePago}</p>
            </div>

            <p id='linea3'>
              -------------------------------------------------------
            </p>
            <div className={style.columna}>
              <h2 id='tipoDeEnvio'>Envio:</h2>
              <p> {orden.shipping}</p>
            </div>
          </div>
          <div className={style.botones}>
            <button onClick={copiarTexto}>Copiar pedido</button>
            <p></p>
            <a href={"https://wa.me/543541297187"}>
              <button>Ir al Whatsapp</button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
