import React, { useEffect, useState } from "react";
import CardInfo from "../../CardInfo/CardInfo";
import style from "../Products.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getHamburguesas } from "../../../redux/action";
function Hamburguesas() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.hamburguesas);

  useEffect(() => {
    dispatch(getHamburguesas());
  }, [dispatch]);

  return (
    <div>
      {products && (
        <div>
          <div className={style.titulo}>
            <h2>Hamburguesas</h2>
          </div>
          <div>
            {products.map(function (item) {
              return (
                <div key={item.id}>
                  <CardInfo
                  quantity={item.quantity}
                  id={item.id}
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

export default Hamburguesas;
