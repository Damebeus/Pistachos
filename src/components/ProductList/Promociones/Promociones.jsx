import React from "react";
import Carousel from "react-bootstrap/Carousel";
import style from "./Promociones.module.css";
function Promociones() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className={style.container}>
          <img
            className='d-block w-100'
            src='https://www.comedera.com/wp-content/uploads/2021/06/sandwich-de-milanesa.jpg'
            alt='First slide'
            height='200'
          />
          <Carousel.Caption>
            <div className={style.titulo}>
              <h3>Sanguche de Milanesa</h3>
              <p>Carne de ternera de primerisima calidad.</p>
            </div>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={style.container}>
          <img
            className='d-block w-100'
            src='https://kingshawaiian.cl/img/home/recetas/hamburguesa/hamburguesa_doble.png'
            alt='Second slide'
            height='200'
          />

          <Carousel.Caption>
            <div className={style.titulo}>
              <h3>Hamburguesa con cheddar</h3>
              <p>No existe hamburguesa mas rica que esta, diosssss.</p>
            </div>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={style.container}>
          <img
            className='d-block w-100'
            src='https://cl-mycooktouch.group-taurus.com/image/recipe/540x391/fugazzeta'
            alt='Third slide'
            height='200'
          />

          <Carousel.Caption>
            <div className={style.titulo}>
              <h3>Pizza fugazza</h3>
              <p>
                Pizza de base sencilla con cebolla y un poco de parmesano, pero
                sin mozzarella.
              </p>
            </div>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Promociones;
