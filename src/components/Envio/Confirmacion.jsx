import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderById, getEnvioById} from "../../redux/action";

export default function Confirmacion() {

    const {id} = useParams()

    const dispatch = useDispatch()

    const [totalPrice, setTotalPrice] = useState(1);

    const orden = useSelector((state) => state.orden)
    const envio = useSelector((state) => state.envio)
    
    let aux = 0;
    function handlePrice() {
        orden.products && orden.products.map((p) => (aux += p.price * p.orderline.quantity));
        changeAmount()
    }
    function changeAmount(){
        if(orden.shipping === "Envio a San Nicolas/Mariano Moreno"){
            setTotalPrice(aux + 150)
        }
        if (orden.shipping === "Envio a Countries"){
            setTotalPrice(aux + 200)
        }
    }

    const confirmacion = {
        id: orden.id,
        barrio: envio.barrio,
        manzana: envio.manzana,
        lote: envio.lote,
        productos: orden.products,
        total: totalPrice,
        metodoDePago: orden.metodoDePago,
        tipoDeEnvio: orden.shipping,
    }

      useEffect(() => {
        handlePrice();
        dispatch(getEnvioById(id))
        dispatch(getOrderById(id))
      }, []);

  return (
    <div>
        <br />
        <p>Orden numero: {confirmacion.id}</p>
        <p>Barrio: {confirmacion.barrio}</p>
        <p>Manzana: {confirmacion.manzana}</p>
        <p>Lote: {confirmacion.lote}</p>
        <p>-------------------------------------------------------</p>
        <p>Productos</p>
        {
            confirmacion.productos && confirmacion.productos.map(e => <p>{e.name}</p>)
        }
        <p>--------------------------------------------------------</p>
        <p>Total: $ {confirmacion.total}</p>
        <p>Metodo de Pago: {confirmacion.metodoDePago}</p>
        <p>-------------------------------------------------------</p>
        <p>{confirmacion.tipoDeEnvio}</p>
        <button>Copiar</button>
        <p></p>
        <button>wpp</button>

    </div>
  )
}
