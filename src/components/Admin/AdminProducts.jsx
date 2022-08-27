import React from "react";
import { useHistory } from "react-router-dom";
import AdminNav from "./AdminNav/AdminNav";

function AdminProducts() {
  const getUser = localStorage.getItem("useData");
  const getPassword = localStorage.getItem("passwordData");

  const navigate = useHistory();

  return (
    <> { !getUser && !getPassword && navigate.push('/admin') }
      <div>
        <AdminNav/>
        <div>
          <h1>Editar Producto</h1>
        </div>
        <form>
          <div>
            <label>Nombre del Producto</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label>Imagen del Producto</label>
            <input type="text" name="img" />
          </div>
          <div>
            <label>Descripción del Producto</label>
            <input type="text" name="description" />
          </div>
          <div>
            <label>Categoria del Producto</label>
            <input type="text" name="category" />
          </div>
          <div>
            <label>Precio del Producto</label>
            <input type="text" name="price" />
          </div>
        </form>
      </div>
    </>
  );
}

export default AdminProducts;
