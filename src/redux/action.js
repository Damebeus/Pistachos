import axios from "axios";
// CATTITO DE COMPRAS
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_ONE_TO_CART = "REMOVE_ONE_TO_CART";
export const REMOVE_ALL_TO_CART = "REMOVE_ALL_TO_CART";
export const CLEAR_CART = "CLEAR_CART";
// PRODUCTOS
export const ALL_PRODUCTS = "ALL_PRODUCTS";
export const GET_EMPANADA = "GET_EMPANADA";
export const GET_BEBIDAS = "GET_BEBIDAS";
export const GET_PIZZAS = "GET_PIZZAS";
export const GET_MILANESAS = "GET_MILANESAS";
export const GET_HAMBURGUESAS = "GET_HAMBURGUESAS";
export const GET_LOMO = "GET_LOMO";
export const GET_PROMO = "GET_PROMO";
export const POST_PRODUCT = "POST_PRODUCT"
export const EDIT_PRODUCT = "EDIT_PRODUCT"

//ADMIN
export const GET_ORDENES = "GET_ORDENES"
export const ORDER_ASC = "ORDER_ASC"
export const ORDER_DES = "ORDER_DES"
export const GET_BY_PRODUCT = "GET_BY_PRODUCT"
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID"
//Envio
export const POST_ENVIO = "POST_ENVIO"
export const POST_ORDEN = "POST_ORDEN"
export const GET_ORDER = "GET_ORDER"
export const GET_ENVIO = "GET_ENVIO"

export function getOrderById(id){
  return async function(dispatch){
    try {
      const result = await axios.get(`https://pistachos.herokuapp.com/ordenes/${id}`)
      return dispatch({
        type: GET_ORDER,
        payload:result.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}
export function getEnvioById(id){
  return async function(dispatch){
    try {
      const result = await axios.get(`https://pistachos.herokuapp.com/envio/${id}`)
      return dispatch({
        type: GET_ENVIO,
        payload:result.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function getProductById(id){
  return async function(dispatch){
      const data = await axios.get(`https://pistachos.herokuapp.com/productos/${id}`)
      return dispatch({
        type: GET_PRODUCT_BY_ID,
        payload:data.data
      })
  }
}

export function getByProduct(name){
  return async function(dispatch){
    try {
      const result = await axios.get(`https://pistachos.herokuapp.com/productos?name=${name}`)
      return dispatch({
        type: GET_BY_PRODUCT,
        payload: result.data
      })
    } catch (error) {
      alert('Recipe not found')
      console.log(error)
    }
  }
}

export function getOrderAsc(){
  return async function(dispatch){
    try {
      const result = await axios.get(`https://pistachos.herokuapp.com/ordenes/asc`)
      return dispatch({
        type: ORDER_ASC,
        payload: result.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function getOrderDes(){
  return async function(dispatch){
    try {
      const result = await axios.get(`https://pistachos.herokuapp.com/ordenes/desc`)
      return dispatch({
        type: ORDER_ASC,
        payload: result.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function getAllOrders(){
  return async function(dispatch){
    try {
      const result = await axios.get(`https://pistachos.herokuapp.com/ordenes/allOrders`)
      return dispatch({
        type: GET_ORDENES,
        payload: result.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function postProduct(payload) {
  return async function () {
    const result = await axios.post(`https://pistachos.herokuapp.com/productos`, payload);
    return {
      type: POST_PRODUCT,
      payload: result.data,
    }
  }
}
  
export function editProduct(payload,id){
  return async function (){
    console.log(payload);
    const result = await axios.put(`https://pistachos.herokuapp.com/productos/${id}`, payload);
    return{
      type: EDIT_PRODUCT,
      payload: result.data
    }
  }
}

export function getPromo() {
  return async function (dispatch) {
    try {
      const result = await axios.get(
        "https://pistachos.herokuapp.com/filtros/promo"
      );
      return dispatch({
        type: GET_PROMO,
        payload: result.data,
      });
    } catch (error) {}
  };
}

export function getLomo() {
  return async function (dispatch) {
    try {
      const result = await axios.get(
        "https://pistachos.herokuapp.com/filtros/lomito"
      );
      return dispatch({
        type: GET_LOMO,
        payload: result.data,
      });
    } catch (error) {}
  };
}

export function getPizzas() {
  return async function (dispatch) {
    try {
      const result = await axios.get(
        "https://pistachos.herokuapp.com/filtros/pizza"
      );

      return dispatch({
        type: GET_PIZZAS,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getHamburguesas() {
  return async function (dispatch) {
    try {
      const result = await axios.get(
        "https://pistachos.herokuapp.com/filtros/hamburguesa"
      );
      return dispatch({
        type: GET_HAMBURGUESAS,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getMilanesas() {
  return async function (dispatch) {
    try {
      const result = await axios.get(
        "https://pistachos.herokuapp.com/filtros/milanesa"
      );
      return dispatch({
        type: GET_MILANESAS,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getBebidas() {
  return async function (dispatch) {
    try {
      const result = await axios.get(
        "https://pistachos.herokuapp.com/filtros/bebidas"
      );
      return dispatch({
        type: GET_BEBIDAS,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAllProducts() {
  return async function (dispatch) {
    try {
      const result = await axios.get(
        "https://pistachos.herokuapp.com/productos"
      );
      return dispatch({
        type: ALL_PRODUCTS,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getEmpanadas() {
  return async function (dispatch) {
    try {
      const result = await axios.get(
        "https://pistachos.herokuapp.com/filtros/empanadas"
      );
      return dispatch({
        type: GET_EMPANADA,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function AddToCart(id) {
  return async (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: id,
    });
  };
}

export function removeOneToCart(id) {
  return async (dispatch) => {
    dispatch({
      type: REMOVE_ONE_TO_CART,
      payload: id,
    });
  };
}

export function postEnvio(payload, id) {
  return async function (dispatch) {
    const result = await axios.post(`https://pistachos.herokuapp.com/envio/${id}`, payload);
    return dispatch ({
      type: POST_ENVIO,
      payload: result.data,
    })
  }
}

export function postOrden(payload) {
  return async function (dispatch) {
    const result = await axios.post(`https://pistachos.herokuapp.com/ordenes`, payload);
    return dispatch( {
      type: POST_ORDEN,
      payload: result.data,
    })
  }
}