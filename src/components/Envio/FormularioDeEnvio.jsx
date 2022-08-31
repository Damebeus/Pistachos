import React, { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { postEnvio, postOrden } from "../../redux/action";
import style from "./FormularioDeEnvio.module.css";

export default function FormularioDeEnvio() {

  const [carrito, setCarrito] = useState([]);

  function cartSubmit() {
    let array = carrito.map((p) => {
      return {
        productId: p.id,
        amount: p.price * p.count,
        quantity: p.count,
      };
    });
    dispatch(postOrden(array))
  }

  const dispatch = useDispatch()

  const [input, setInput] = useState({
    manzana: "",
    lote: "",
    barrio: "",
    telefono: "",
    nombreCompleto: "",
    referencia:"",
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    if (
      !input.manzana ||
      !input.lote ||
      !input.barrio ||
      !input.telefono ||
      !input.nombreCompleto
    ) {
      e.preventDefault();
      return alert("Complete todos los campos para poder continuar");
    } else {
      e.preventDefault();
      alert("Envio completado correctamente");
      dispatch(postEnvio(input))  
      setInput({
        manzana: "",
        lote: "",
        barrio: "",
        telefono: "",
        nombreCompleto: "",
        referencia:"",
      });
    }
  }

  useEffect(() => {
    setCarrito(JSON.parse(localStorage.getItem("carrito")));
  }, []);

  return (
    <div>
      <div className={style.bg}>
        <br />
        <br />
        <div className={style.titulo}>
          <h1>Complete datos de envio</h1>
        </div>
        <div className={style.container}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <p>Manzana:</p>
              <input
                type='text'
                value={input.manzana}
                name='manzana'
                placeholder='Manzana'
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div>
              <p>Lote:</p>
              <input
                type='nombreCompleto'
                value={input.lote}
                name='lote'
                placeholder='Lote'
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div>
              <p>Barrio:</p>
              <input
                type='text'
                value={input.barrio}
                name='barrio'
                placeholder='Barrio'
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div>
              <p>Telefono:</p>
              <input
                type='number'
                value={input.telefono}
                name='telefono'
                placeholder='Telefono'
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div>
              <p>Nombre Completo:</p>
              <input
                type='text'
                value={input.nombreCompleto}
                name='nombreCompleto'
                placeholder='Nombre Completo'
                onChange={(e) => handleChange(e)}
              />
            </div>

            <div>
              <p>Referencia:</p>
              <input
                type='text'
                value={input.referencia}
                name='referencia'
                placeholder='Opcional'
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className={style.btnC}>
            </div>
            <div>
              <button
              onClick={e => cartSubmit()} 
              type='submit'
              >
                SIGUIENTE
              </button>
            </div>
          </form>
          <div className={style.backBtn}>
            <button>
                <Link to={`/cart`}>Cancelar</Link>
            </button>
            </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}