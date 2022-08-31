import React, { useEffect } from "react";
// import data from "../../../data/data";
import CardInfo from "../../CardInfo/CardInfo";
import style from "../Products.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getBebidas } from "../../../redux/action";
function Bebidas() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.bebidas);

  useEffect(() => {
    dispatch(getBebidas());
  }, [dispatch]);

  return (
    <div id="Bebidas">
      {products && (
        <div>
          <div className={style.titulo}>
            <h2>Bebidas</h2>
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

export default Bebidas;
