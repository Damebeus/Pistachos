import React from "react";
import Login from "./Login/Login";
import LogOut from "./LogOut/LogOut";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./Navbar.module.css";
import {Liink, Link} from 'react-scroll'
function Navbar() {
  const { isAuthenticated } = useAuth0();

  return (
    <nav class='navbar navbar-expand-lg bg-success  bg-success position-fixed top-0  w-100 '>
      <div class='container-fluid '>
        <a class='navbar-brand' href='#'>
          Menu
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse ' id='navbarNav'>
          <ul class='navbar-nav '>
            <button class='nav-item' className={style.boton}>
              <Link to='pizza'>
              <a class='nav-link active' href='#'>
                Pizzas
              </a>
              </Link>
            </button>
            <button class='nav-item' className={style.boton}>
              <Link to='empanadas'>
              <a class='nav-link active' href='#'>
                Empanadas
              </a>
              </Link>
            </button>
            <button class='nav-item' className={style.boton}>
              <Link to='burguer'>
              <a class='nav-link active'>Hamburguesas</a>
              </Link>
            </button>
            <button class='nav-item' className={style.boton}>
              <Link to='lomitos'>
              <a class='nav-link active'>Lomitos</a>
              </Link>
            </button>
            <button class='nav-item' className={style.boton}>
              <Link to='sanguches'>
              <a class='nav-link active'>Sanguches</a>
              </Link>
            </button>
            <button class='nav-item' className={style.boton}>
              <Link to='Bebidas'>
              <a class='nav-link active'>Bebidas</a>
              </Link>
            </button>
            <button class='nav-item' className={style.boton}>
              <a class='nav-link active' aria-current='page' href='#'>
                Carrito
              </a>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
  {
    /* <div>{isAuthenticated ? <LogOut /> : <Login />}</div> */
  }
}

export default Navbar;
