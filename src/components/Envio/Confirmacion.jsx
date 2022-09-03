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
        else(
            setTotalPrice(aux + 0)
        )
    }

      useEffect(() => {
        handlePrice();
        dispatch(getOrderById(id))
        dispatch(getEnvioById(id))
      }, [totalPrice]);

  return (
    <div>
        {envio === null ? (<p>loading</p>): 
        (
        <div>
            <br />
            <p>Orden numero: {orden.id}</p>
            <p>Barrio: {envio.barrio}</p>
            <p>Manzana: {envio.manzana}</p>
            <p>Lote: {envio.lote}</p>
            <p>-------------------------------------------------------</p>
            <p>Productos</p>
            {
                orden.products && orden.products.map(e => <p>{e.orderline.quantity} * {e.name}</p>)
            }
            <p>--------------------------------------------------------</p>
            <p>Total: $ {totalPrice}</p>
            <p>Metodo de Pago: {orden.metodoDePago}</p>
            <p>-------------------------------------------------------</p>
            <p>{orden.tipoDeEnvio}</p>
            <button >Copiar</button>
            <p></p>
            <button>wpp</button>
        </div>)}
    </div>
  )
}
