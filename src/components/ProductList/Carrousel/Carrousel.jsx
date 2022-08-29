import React from "react";
import Carousel from "react-bootstrap/Carousel";
import style from "./Carrousel.module.css";
function Carrousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className={style.supcarru}>
          {" "}
          <h3>Sanguche de Milanesa</h3>
        </div>
        <div className={style.containerr}>
          <img
            className='d-block w-100'
            src='https://www.comedera.com/wp-content/uploads/2021/06/sandwich-de-milanesa.jpg'
            alt='First slide'
            height='220'
          />
          <Carousel.Caption>
            <div className={style.tituloo}>
              <p>Carne de ternera de primerisima calidad.</p>
            </div>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={style.supcarru}>
          {" "}
          <h3>Hamburguesa con cheddar</h3>
        </div>
        <div className={style.containerr}>
          <img
            className='d-block w-100'
            src='https://kingshawaiian.cl/img/home/recetas/hamburguesa/hamburguesa_doble.png'
            alt='Second slide'
            height='220'
          />

          <Carousel.Caption>
            <div className={style.tituloo}>
              <p>No existe hamburguesa mas rica que esta, diosssss.</p>
            </div>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={style.supcarru}>
          {" "}
          <h3>Pizza fugazzeta</h3>
        </div>
        <div className={style.containerr}>
          <img
            className='d-block w-100'
            src='https://cl-mycooktouch.group-taurus.com/image/recipe/540x391/fugazzeta'
            alt='Third slide'
            height='220'
          />

          <Carousel.Caption>
            <div className={style.tituloo}>
              <p>Pizza de base sencilla con cebolla y un poco de parmesano.</p>
            </div>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;
