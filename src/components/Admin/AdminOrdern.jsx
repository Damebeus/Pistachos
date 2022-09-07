import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import AdminNav from "./AdminNav/AdminNav";
import { useSelector, useDispatch } from "react-redux";
import { getAllOrders, getOrderAsc, getOrderDes } from "../../redux/action";
import styles from "./AdminOrden.module.css";

function AdminOrdern() {
  const getUser = localStorage.getItem("useData");
  const getPassword = localStorage.getItem("passwordData");

  const dispatch = useDispatch();

  const allOrdenes = useSelector((state) => state.ordenes);

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  function handleSortAscending(e) {
    if (e.target.value === "asc") {
      return dispatch(getOrderAsc());
    }
    if (e.target.value === "desc") {
      return dispatch(getOrderDes());
    }
  }
  const navigate = useHistory();
  return (
    <>
      {!getUser && !getPassword && navigate.push("/admin")}
      <div className={styles.mainContent}>
        <AdminNav />
        <h1 className={styles.AdminH1}>Ordenes Creadas</h1>
        <div className={styles.ordenemiento}>
          <h2 className={styles.AdminH2}>Ordenar por fechas</h2>
          <select onChange={(e) => handleSortAscending(e)}>
            <option>Select Order</option>
            <option value="asc">asc</option>
            <option value="desc">desc</option>
          </select>
        </div>
        {allOrdenes && (
          <div className={styles.divMain}>
            {allOrdenes.map((productos) => {
              const envio = { ...productos.envio };
              return (
                <div className={styles.divChil} key={productos.id}>
                  <div className={styles.orden}>
                    <h6>Orden Numero: {productos.id}</h6>
                    <p>Dia del Pedido:</p>
                    <p>{productos.buyDate}</p>
                  </div>
                  <div className={styles.envio}>
                    <h4>Envio:</h4>
                    <p>Manzana: {envio.manzana}</p>
                    <p>Tipo de Entrega: {productos.shipping}</p>
                    <p>Barrio: {envio.barrio}</p>
                    <p>Lote: {envio.lote}</p>
                    <p>Telefono: {envio.telefono}</p>
                    <p>Nombre Completo: {envio.nombreCompleto}</p>
                  </div>
                  <div className={styles.productos}>
                    <h4>Productos:</h4>
                    {productos.products.map((e) => {
                      return (
                        <div key={e.id}>
                          <p>
                            {e.orderline.quantity} * {e.name}
                          </p>
                        </div>
                      );
                    })}
                    <p>Total: ${productos.totalPrice}</p>
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
