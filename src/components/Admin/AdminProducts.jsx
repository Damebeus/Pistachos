  import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProduct, getProductById } from "../../redux/action";
import AdminNav from "./AdminNav/AdminNav";
import { useHistory, useParams, Link } from "react-router-dom";
import Swal from "sweetalert2";
import styles from "./AdminProducts.module.css";

function AdminProducts() {

  const [currentUser, setCurrentUser] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useHistory();
  
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
  
  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(editProduct(post, id));
    Swal.fire(
      "Producto editado!",
      "Los clientes ya pueden disfrutar del producto",
      "success"
      );
      navigate.push(`/admin`);
    }
    
    function handleChange(e) {
      setPost({
        ...post,
        [e.target.name]: e.target.value,
      });
    }

    useEffect(() => {
      dispatch(getProductById(id));
      const user = localStorage.getItem("useData");
      const password = localStorage.getItem("passwordData");
      if (user || password) {
        setCurrentUser(user);
        setCurrentPassword(password)
      }
    }, [dispatch, id]);
    
    const product = useSelector((state) => state.product);
    
    const [post, setPost] = useState({
    name: product.name,
    description: product.description,
    image: product.image,
    price: product.price,
    category: product.category,
    disable: product.disable,
    stock: product.stock,
  });
  
  
  return (
    <div>
      {currentPassword === "Pistachos" && currentUser === 12345 ? (
        navigate.push("/admin")
      ) :(
        <div>
          <AdminNav />
          <div className={styles.container}>
            <div className={styles.titulin}>
              <h1>Editar Producto</h1>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.nombre}>
            <input
              type='text'
              value={post.name}
              name='name'
              placeholder='Name'
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className={styles.description}>
            <textarea
              type='text'
              value={post.description}
              placeholder='description'
              name='description'
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            <div className={styles.cuadroImg}>
                  {post.image ? (
                    <img src={post.image} alt='not' width='250' height='250' />
                    ) : (
                    <div className={styles.img}>
                      <img src='https://www.pngfind.com/pngs/m/66-661092_png-file-upload-image-icon-png-transparent-png.png' alt='not' width='250' height='250' />
                    </div>
                  )}
                </div>
            <div className={styles.botonimg}>
              <input
                type='file'
                id='file'
                name='image'
                onChange={uploadImage}
              />
            </div>
            <br />
          </div>

          <div className={styles.precio}>
                <p>Precio</p>
            <input
              type='number'
              value={post.price}
              name='price'
              onChange={(e) => handleChange(e)}
              min='1'
            />
          </div>
          <div className={styles.category}>
          <p>Categoria:</p>
            <select
              value={post.category}
              name='category'
              onChange={(e) => handleChange(e)}
            >
              <option></option>
              <option>Pizza</option>
              <option>Bebidas</option>
              <option>Empanadas</option>
              <option>Milanesa</option>
              <option>Hamburguesa</option>
              <option>Lomito</option>
              <option>Promo</option>
            </select>
          </div>
          <div className={styles.stock}>
            <p>Stock:</p>
            <select
              value={post.stock}
              name='stock'
              onChange={(e) => handleChange(e)}
            >
              <option></option>
              <option value={true}>si</option>
              <option value={false}>no</option>
            </select>
          </div>
          <div className={styles.desactivar}>
            <p>disable</p>
            <select
              value={post.disable}
              name='disable'
              onChange={(e) => handleChange(e)}
            >
              <option></option>
              <option value={true}>si</option>
              <option value={false}>no</option>
            </select>
          </div >
          <div className={styles.botones}>
                <div className={styles.crear}>
                  <button type='submit'>Editar</button>
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
    )}
    </div>
  );

}

export default AdminProducts; 