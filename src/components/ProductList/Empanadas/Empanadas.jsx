import React, { useEffect, useState } from "react";
import { getEmpanadas } from "../../../redux/action";
import CardInfo from "../../CardInfo/CardInfo";
import style from "../Products.module.css";
import { useSelector, useDispatch } from "react-redux";
function Empanadas() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.empanadas);
  
  useEffect(() => {
    dispatch(getEmpanadas());
  }, [dispatch]);
  return (
    <div className={style.container}>
      {products && (
        <div>
          <div className={style.titulo}>
            <h1>Empanadas</h1>
          </div>
          <div>
            {products.map((product) => {
              return (
                <CardInfo
                  key={product.id}
                  img={product.image}
                  name={product.name}
                  price={product.price}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Empanadas;
