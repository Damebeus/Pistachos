import React, { useRef, useState } from "react";
import AdminHome from "./AdminHome";

function Admin() {
  const user = useRef();
  const password = useRef();
  const getUser = localStorage.getItem("useData");
  const getPassword = localStorage.getItem("passwordData");

  const handleSubmit = (e) => {
    if (
      user.current.value === "Pistachos" &&
      password.current.value === "1234"
    ) {
      localStorage.setItem("useData", "Pistachos");
      localStorage.setItem("passwordData", "12345");
    } else{
      alert("Error ")
    }
  };
  return (
    <div>
      {
        getUser&&getPassword?
        <AdminHome/>:
      <form onSubmit={handleSubmit}>
        <label htmlFor="">User</label><br />
        <input type="text" name="user" ref={user} /><br />
        <label htmlFor="">Password</label><br />
        <input type="password" ref={password} name="password" /><br />
        <input type="submit" />
      </form>
      }
    </div>
  );
}

export default Admin;
