import React from "react";
import { Link } from "react-router-dom";
import './AdminCard.css'

function AdminCard(product) {
  return (
      <div className="card_product">
        <div>
          <img
            className="card_image "
            src={product.img}
            alt={product.name}
            width="150px"
            height="130px"
          />
        </div>
        <div>
          <h2 className="heading">{product.name}</h2>
          <p>{product.description}</p>
          <span>{"$" + product.price}</span>
        </div>
        <div>
          <Link to={`/admin/products/${product.id}`}>
            <button>Editar Producto</button>
          </Link>
        </div>
      </div>
  );
}

export default AdminCard;
