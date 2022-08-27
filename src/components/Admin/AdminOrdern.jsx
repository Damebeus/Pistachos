import React from "react";
import { useHistory } from "react-router-dom";
import AdminNav from "./AdminNav/AdminNav";

function AdminOrdern() {
  const getUser = localStorage.getItem("useData");
  const getPassword = localStorage.getItem("passwordData");

  const navigate = useHistory();
  return (
    <>
    {!getUser && !getPassword && navigate.push("/admin")}
      <div>
        <AdminNav/>
        <h1>Ordenes Creadas</h1>
      </div>
    </>
  );
}

export default AdminOrdern;
