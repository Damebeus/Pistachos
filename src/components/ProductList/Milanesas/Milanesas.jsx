import React, { useEffect } from "react";
import CardInfo from "../../CardInfo/CardInfo";
import style from "../Products.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getMilanesas } from "../../../redux/action";
function Milanesas() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.milanesas);

  useEffect(() => {
    dispatch(getMilanesas());
  }, [dispatch]);
  return (
    <div id="sanguches">
      {products && (
        <div>
          <div className={style.titulo}>
            <h2>Milanesas</h2>
          </div>
          <div>
            {products.map((product) => {
              return (
                <CardInfo
                  quantity={product.quantity}
                  id={product.id}
                  key={product.id}
                  img={product.image}
                  description={product.description}
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

export default Milanesas;
