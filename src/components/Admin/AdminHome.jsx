import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import AdminNav from "./AdminNav/AdminNav";
import { useSelector, useDispatch } from "react-redux";
import AdminCard from "./AdminCard/AdminCard";
// import CardInfo from "../CardInfo/CardInfo";
import { getAllProducts } from "../../redux/action";
import SearchAdmin from "./SearchAdmin/SearchAdmin";
import "./AdminHome.css";

function AdminHome() {
  const getUser = localStorage.getItem("useData");
  const getPassword = localStorage.getItem("passwordData");
  const allProducts = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const navigate = useHistory();
  return (
    <>
      {!getUser && !getPassword && navigate.push("/admin")}
      <AdminNav />
      <h1>Home Page</h1>
      <div>
        <SearchAdmin />
      </div>
      {allProducts && (
        <div className='div_main'>
          <div>
            <h2>Productos</h2>
          </div>
          <div className='All_Cards'>
            {allProducts.map(function (item) {
              return (
                <div key={item.id}>
                  <AdminCard
                    key={item.id}
                    name={item.name}
                    img={item.image}
                    price={item.price}
                    description={item.description}
                    id={item.id}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default AdminHome;
