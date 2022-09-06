import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postEnvio } from "../../redux/action";
import { Link } from "react-router-dom";
import style from "./FormularioDeEnvio.module.css";

export default function FormularioDeEnvio() {
  const orden = useSelector((state) => state.orden);

  const dispatch = useDispatch();

  const [input, setInput] = useState({
    manzana: "",
    lote: "",
    barrio: "",
    telefono: "",
    nombreCompleto: "",
    referencia: "",
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
      dispatch(postEnvio(input, orden.id));
      setInput({
        manzana: "",
        lote: "",
        barrio: "",
        telefono: "",
        nombreCompleto: "",
        referencia: "",
      });
    }
  }

  return (
    <div className={style.bg}>
      <div className={style.banner}>
        <div className={style.titulo}>
          <h1>Datos de envio</h1>
        </div>
      </div>
      <div className={style.container}>
        <form>
          <div className={style.campos}>
            <span>Barrio:</span>
            <input
              type='text'
              value={input.barrio}
              name='barrio'
              placeholder='Barrio'
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className={style.campos}>
            <span>Manzana:</span>
            <input
              type='text'
              value={input.manzana}
              name='manzana'
              placeholder='Manzana'
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className={style.campos}>
            <span>Lote:</span>
            <input
              type='nombreCompleto'
              value={input.lote}
              name='lote'
              placeholder='Lote'
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className={style.campos}>
            <span>Telefono:</span>
            <input
              type='number'
              value={input.telefono}
              name='telefono'
              placeholder='Telefono'
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className={style.campos}>
            <span>Nombre:</span>
            <input
              type='text'
              value={input.nombreCompleto}
              name='nombreCompleto'
              placeholder='Nombre Completo'
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div className={style.campos}>
            <span>Referencia:</span>
            <input
              type='text'
              value={input.referencia}
              name='referencia'
              placeholder='Opcional'
              onChange={(e) => handleChange(e)}
            />
          </div>
        </form>
        <div className={style.footer}>
          <Link to={`/cart`}>
            <button>
              <span>Cancelar</span>
            </button>
          </Link>
          <Link to={`/confirmacion/${orden.id}`}>
            <button onClick={(e) => handleSubmit(e)}>
              <span> Siguiente</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
