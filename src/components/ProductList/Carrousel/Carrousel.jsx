import React from "react";
import Carousel from "react-bootstrap/Carousel";
import style from "./Carrousel.module.css";
import delivery from "./delivery.png";
import pago from "./pago.png";
import reloj from "./reloj.png";
function Carrousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className={style.containerr}>
          <div className={style.imagen}>
            <img src={delivery} alt='First slide' height='250' />
          </div>
          <div className={style.listado}>
            <h1>Zona de reparto</h1>
            <p>Arbolada</p>
            <p>Tierra Alta</p>
            <p>Tejas 4</p>
            <p>Cañitas</p>
            <p>EDC</p>
            <p>Milenica</p>
            <p>Causana</p>
            <p>Valle del golf</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={style.containerr}>
          <div className={style.imagenreloj}>
            <img
              className='d-block w-100'
              src={reloj}
              alt='Second slide'
              height='250'
            />
          </div>
          <div className={style.listadoreloj}>
            <h1>Horarios</h1>
            <span>Lunes</span>
            <p>Cerrado</p>
            <span>Martes a Domingo</span>
            <p>12hs-14hs</p>
            <p>20hs-23hs</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={style.containerr}>
          <div className={style.imagenpago}>
            <img
              className='d-block w-100'
              src={pago}
              alt='Second slide'
              height='200'
            />
          </div>
          <div className={style.listadopago}>
            <h1>Medios de pago</h1>
            <p>Efectivo</p>
            <p>Mercado Pago</p>
            <p>Transferencia</p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;
