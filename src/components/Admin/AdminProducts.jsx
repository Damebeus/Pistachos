import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import AdminNav from "./AdminNav/AdminNav";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { editProduct, getProductById } from "../../redux/action";

function AdminProducts() {
  const getUser = localStorage.getItem("useData");
  const getPassword = localStorage.getItem("passwordData");
  const { id } = useParams();
  const dispatch = useDispatch();

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
  }, [dispatch, id]);

  const product = useSelector((state) => state.product);

  const [post, setPost] = useState({
    name: product.name,
    description: product.image,
    image: product.image,
    price: product.price,
    category: product.category,
    disable: product.disable,
    stock: product.stock,
  });

  const navigate = useHistory();

  return (
    <>
      {" "}
      {!getUser && !getPassword && navigate.push("/admin")}
      <div>
        <AdminNav />
        <div>
          <h1>Editar Producto</h1>
        </div>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="field">
            <label>Name:</label>
            <input
              className="inputAd"
              placeholder="Name"
              type="text"
              name="name"
              value={post.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="field">
            <label>description:</label>
            <input
              className="inputAd"
              placeholder="description"
              type="text"
              name="description"
              value={post.description}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <div>
            {/*    <p>Imagenes del producto</p> */}
            <div>
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
            <div>
              <input
                type="file"
                id="file"
                name="image"
                onChange={uploadImage}
              />
            </div>
            <br />
          </div>

          <div>
            <label>Precio:</label>
            <input
              type="number"
              value={post.price}
              name="price"
              onChange={(e) => handleChange(e)}
              min="1"
              max="10000"
            />
          </div>
          <div>
            <label>Category</label>
            <select
              value={post.category}
              name="category"
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
          <div>
            <label>stock</label>
            <select
              value={post.stock}
              name="stock"
              onChange={(e) => handleChange(e)}
            >
              <option></option>
              <option value={true}>si</option>
              <option value={false}>no</option>
            </select>
          </div>
          <div>
            <label>disable</label>
            <select
              value={post.disable}
              name="disable"
              onChange={(e) => handleChange(e)}
            >
              <option></option>
              <option value={true}>si</option>
              <option value={false}>no</option>
            </select>
          </div>
          <div className="field">
            <button type="submit">Agregar</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AdminProducts;
