import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import AdminNav from "./AdminNav/AdminNav";
import { useSelector, useDispatch } from "react-redux";
import { getAllOrders, getOrderAsc, getOrderDes } from "../../redux/action";

function AdminOrdern() {
  const getUser = localStorage.getItem("useData");
  const getPassword = localStorage.getItem("passwordData");

  const dispatch = useDispatch();

  const allOrdenes = useSelector((state) => state.ordenes);

  
  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);
  

  function handleSortAscending(e){
    if(e.target.value === 'asc'){
      return dispatch(getOrderAsc())
    }
    if(e.target.value === 'desc'){
      return dispatch(getOrderDes());
    }
  }
  const navigate = useHistory();
  return (
    <>
      {!getUser && !getPassword && navigate.push("/admin")}
      <div>
        <AdminNav />
        <h1>Ordenes Creadas</h1>
        <div>
          <h2>Ordenar por fechas</h2>
          <select onChange={(e) => handleSortAscending(e)}>
            <option>Select Order</option>
            <option value="asc">asc</option>
            <option value="desc">desc</option>
          </select>
        </div>
        {allOrdenes && (
          <div>
            {allOrdenes.map(function (item) {
              return (
                <div key={item.id}>
                  <p>Dia del Pedido:{item.buyDate}</p>
                  <br/>
                  <p>Domicilio:{item.envio}</p>
                  <br/>
                  <p>Tipo de Entrega{item.shipping}</p>
                  <div>
                    {
                      item.products.map((e)=> {
                        return (
                          <div key={e.id}>
                            <p>Nombre del Producto:{e.name}</p>
                            <p>Categoria del Producto{e.category}</p>
                            <p>Cantidad:{e.orderline.quantity}</p>
                            <p>Precio:{e.orderline.amount}</p>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default AdminOrdern;
