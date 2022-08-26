import React from "react";
import Login from "./Login/Login";
import LogOut from "./LogOut/LogOut";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { isAuthenticated } = useAuth0();
  return <div>{isAuthenticated ? <LogOut /> : <Login />}</div>;
}

export default Navbar;
