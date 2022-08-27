import React, { useEffect, useState } from "react";
import CardInfo from "../../CardInfo/CardInfo";
import style from "../Products.module.css";
import { useSelector, useDispatch } from "react-redux";
import {  getPromo } from "../../../redux/action";
function Promociones() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.promos);
  
  useEffect(() => {
    dispatch(getPromo());
  }, [dispatch]);

  return (
    <div>
      {products && (
        <div>
          <div className={style.titulo}>
            <h1>Promociones</h1>
          </div>
          <div>
            {products.map(function (item) {
              return (
                <div key={item.id}>
                  <CardInfo
                    img={item.image}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    item={item}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Promociones;

