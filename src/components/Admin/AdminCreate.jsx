//crear un formulario para agregar un nuevo plato
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { postProduct } from "../../redux/action";
import AdminNav from "./AdminNav/AdminNav";
import styles from "./AdminCreate.module.css"

function validate(post) {
  let errors = {};
  if (!post.name) {
    errors.name = "El nombre es requerido";
  } else if (!isNaN(post.name)) {
    errors.name = "El nombre no puede tener numeros";
  }

  if (!post.summary) {
    errors.summary = "La descripción es requerida";
  } else if (post.summary.length > 100) {
    errors.summary = "La descripción no puede tener mas de 100 caracteres";
  }

  if (!post.steps) {
    errors.steps = "Las instrucciones son requeridas";
  } else if (post.steps.length > 100) {
    errors.steps = "Las instrucciones no pueden tener mas de 100 caracteres";
  }
  // the health score must be between 0 and 100
  if (post.health_score < 0 || post.health_score > 100) {
    errors.health_score = "El puntaje debe estar entre 0 y 100";
  }
  return errors;
}

function AddFood() {
  const dispatch = useDispatch();
  const navigate = useHistory();

  const [errors, setErrors] = useState({});

  const [post, setPost] = useState({
    name: "",
    description: "",
    image: "",
    price: 0,
    category:"",
  });

  function handleSubmit(e) {
    if (!post.name && !post.summary) {
      e.preventDefault();
      return alert("Por favor ingrese un nombre y una descripción");
    } else {
      if (!post.image) {
        post.image =
          "https://i.pinimg.com/originals/05/a8/20/05a82044cd183e064d721e2aeacfdbe6.jpg";
      }
      dispatch(postProduct(post));
      alert("Producto agregado");
      setPost({
        name: "",
        description: "",
        image: "",
        price: 0,
        category:'',
      });
      navigate("/");
    }
  }

  function handleChange(e) {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...post,
        [e.target.name]: e.target.value,
      })
    );
  }

  async function uploadImage(e) {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "images");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dbgreenshop/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    const aux = file.secure_url;
    setPost({
      ...post,
      image: aux,
    });
  }
  const getUser = localStorage.getItem("useData");
  const getPassword = localStorage.getItem("passwordData");


  return (
    <> { !getUser && !getPassword && navigate.push('/admin') }
    <div className="flex">
      <AdminNav/>
      <div className={styles.container}>
        <div className={styles.titulin}>
          <h1 className="form_heading">Edit Product</h1>
        </div>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className={styles.nombre}>
            <input
              className="inputAd"
              placeholder="Name"
              type="text"
              name="name"
              value={post.name}
              onChange={(e) => handleChange(e)}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>
          <div className={styles.description}>
            <textarea
              className="inputAd"
              placeholder="description"
              type="text"
              name="description"
              value={post.description}
              onChange={(e) => handleChange(e)}
            />
            {errors.description && <p>{errors.description}</p>}
          </div>

          <div>
            {/*    <p>Imagenes del producto</p> */}
            <div className={styles.cuadroImg}>
              {post.image ? (
                <img src={post.image} alt="not" width="250" height="250" />
              ) : (
                <div>
                  <img
                    src="https://www.pngfind.com/pngs/m/66-661092_png-file-upload-image-icon-png-transparent-png.png"
                    alt="not"
                    width="250"
                    height="250"
                  />
                </div>
              )}
            </div>
            <div className={styles.botonimg}>
              <input
                type="file"
                id="file"
                name="image"
                onChange={uploadImage}
              />
            </div>
            <br />
          </div>

          <div className={styles.precio}>
            <p>Precio:</p>
            <input
              type="number"
              value={post.price}
              name="price"
              onChange={(e) => handleChange(e)}
              min="1"
              max="10000"
            />
          </div>
          <div className={styles.category}>
            <label>Category</label>
            <select
                  value={post.category}
                  name='category'
                  onChange={(e) => handleChange(e)}
                >
                  <option></option>
                  <option>pizza</option>
                  <option>bebidas</option>
                  <option>empanadas</option>
                  <option>milanesa</option>
                  <option>hamburguesa</option>
                  <option>lomito</option>
                  <option>promo</option>
            </select>
          </div>
          <div className={styles.botones}>
                <div className={styles.crear}>
                  <button type='submit'>Crear</button>
                </div>
                <div className={styles.cancelar}>
                  <span>
                    <Link to={`/admin`}>Cancelar</Link>
                  </span>
                </div>
              </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default AddFood;
