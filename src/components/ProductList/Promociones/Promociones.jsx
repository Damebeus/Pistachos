import React, { useEffect, useState } from "react";
import { getEmpanadas, getPromo } from "../../../redux/action";
import CardInfo from "../../CardInfo/CardInfo";
import { useSelector, useDispatch } from "react-redux";
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
          <div >
            <h1>Promociones</h1>
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