import React from "react";
import data from "../../../data/data";
import CardInfo from "../../CardInfo/CardInfo";
import style from "../Products.module.css";
function Hamburguesas() {
  const filtrado = data.filter(function (e) {
    return e.category === "hamburguesas";
  });

  return (
    <div>
      {filtrado && (
        <div>
          <div className={style.titulo}>
            <h1>Hamburguesas</h1>
          </div>
          <div>
            {filtrado.map(function (item) {
              return (
                <div key={item.id}>
                  <CardInfo
                    img={item.img}
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
