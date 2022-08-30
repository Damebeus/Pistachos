import React, { useEffect, useState } from "react";
import { getPizzas } from "../../../redux/action";
import CardInfo from "../../CardInfo/CardInfo";
import style from "../Products.module.css";
import { useDispatch, useSelector } from "react-redux";
function Pizza() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.pizzas);

  useEffect(() => {
    dispatch(getPizzas());
  }, [dispatch]);

  return (
    <div>
      {products && (
        <div>
          <div className={style.titulo}>
            <h2>Pizzas</h2>
          </div>
          <div>
            {products.map((product) => {
              return (
                <CardInfo
                quantity={product.quantity}
                  id={product.id}
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

export default Pizza;
