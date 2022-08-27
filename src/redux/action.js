import axios from "axios";
import data from "../data/data";
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
export const GET_MILANESAS = 'GET_MILANESAS';
export const GET_HAMBURGUESAS = 'GET_HAMBURGUESAS';
export const GET_LOMO = 'GET_LOMO';
export const GET_PROMO = 'GET_PROMO';


export function getPromo(){
  return async function(dispatch){
    try {
      const result = await axios.get('https://pistachos.herokuapp.com/filtros/promo')
      return dispatch({
        type: GET_PROMO,
        payload: result.data
      })
    } catch (error) {
      
    }
  }
}

export function getLomo(){
  return async function(dispatch){
    try {
      const result = await axios.get('https://pistachos.herokuapp.com/filtros/lomito')
      return dispatch({
        type: GET_LOMO,
        payload: result.data
      })
    } catch (error) {
      
    }
  }
}

export function getPizzas() {
  return async function (dispatch) {
    try {
      const result = await axios.get(
        "https://pistachos.herokuapp.com/filtros/pizza"
      );
      console.log(result.data)
      return dispatch({
        type: GET_PIZZAS,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getHamburguesas(){
  return async function(dispatch){
    try {
      const result = await axios.get('https://pistachos.herokuapp.com/filtros/hamburguesa')
      return dispatch({
        type: GET_HAMBURGUESAS,
        payload: result.data,

      })
    } catch (error) {
      console.log(error);
    }
  }
}

export function getMilanesas(){
  return async function(dispatch){
    try {
      const result = await axios.get('https://pistachos.herokuapp.com/filtros/milanesa')
      return dispatch({
        type: GET_MILANESAS,
        payload: result.data,
      })
    } catch (error) {
      console.log(error);
    }
  }
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
