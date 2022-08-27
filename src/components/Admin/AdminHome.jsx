import React from "react";
import { useHistory } from "react-router-dom";
import AdminNav from "./AdminNav/AdminNav";

function AdminHome() {
  const getUser = localStorage.getItem("useData");
  const getPassword = localStorage.getItem("passwordData");

  const navigate = useHistory();
  return (
    <>
    {!getUser && !getPassword && navigate.push("/admin")}
      <AdminNav />
      <h1>Home Page</h1>
    </>
  );
}

export default AdminHome;
