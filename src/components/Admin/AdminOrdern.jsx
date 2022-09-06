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
            {allOrdenes.map(productos => {
              const envio = {...productos.envio}
              return (
                <div key={productos.id}>
                  <p>----------------------------------------------------------------------------</p>
                  <h6>Orden Numero: {productos.id}</h6>
                  <p>Dia del Pedido:{productos.buyDate}</p>
                  <br/>
                  <div>
                    <h4>Envio:</h4>
                    <p>Manzana: {envio.manzana}</p>
                    <p>Lote: {envio.lote}</p>
                    <p>Barrio: {envio.barrio}</p>
                    <p>Telefono: {envio.telefono}</p>
                    <p>Nombre Completo: {envio.nombreCompleto}</p>
                  </div>
                  <p>Tipo de Entrega: {productos.shipping}</p>
                  <br />
                  <div>
                    <h4>Productos:</h4>
                    {
                      productos.products.map((e)=> {
                        return (
                          <div key={e.id}>
                            <p>{e.orderline.quantity} * {e.name}</p>
                          </div>
                        )
                      })
                    }
                    <p>Total: {productos.totalPrice}</p>
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
