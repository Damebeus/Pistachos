import React, { useEffect } from "react";
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
    <div className={style.container} id='empanadas'>
      {products && (
        <div>
          <div className={style.titulo}>
            <h2>Empanadas</h2>
          </div>
          <div>
            {products.map((product) => {
              return (
                <CardInfo
                  quantity={product.quantity}
                  id={product.id}
                  description={product.description}
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
