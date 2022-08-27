import React, { useEffect, useState } from "react";
import CardInfo from "../../CardInfo/CardInfo";
import style from "../Products.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getLomo } from "../../../redux/action";
function Lomo() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.lomos);
  
  useEffect(() => {
    dispatch(getLomo());
  }, [dispatch]);
  return (
    <div>
      {products && (
        <div>
          <div className={style.titulo}>
            <h1>Lomos</h1>
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

export default Lomo;
