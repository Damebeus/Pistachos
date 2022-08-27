import React, { useEffect, useState } from "react";
import { getEmpanadas, getPromo } from "../../../redux/action";
import CardInfo from "../../CardInfo/CardInfo";
import { useSelector, useDispatch } from "react-redux";
import style from "../Products.module.css";
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
            <h2>Promociones</h2>
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

export default Promociones;
