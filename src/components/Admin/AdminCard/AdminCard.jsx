import React from "react";

function AdminCard(product) {
  return (
    <div>
      <div>
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <span>{"$" + product.price}</span>
        </div>
        <div>
        <img src={product.img} alt={product.name} width='150px' height='130px' />
        </div>
      </div>
    </div>
  );
}

export default AdminCard;
