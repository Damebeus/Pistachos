import axios from 'axios'
import data from '../data/data'
    // CATTITO DE COMPRAS
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_ONE_TO_CART = 'REMOVE_ONE_TO_CART'
export const REMOVE_ALL_TO_CART = 'REMOVE_ALL_TO_CART'
export const CLEAR_CART = 'CLEAR_CART'
    // PRODUCTOS
export const ALL_PRODUCTS = 'ALL_PRODUCTS'
export const GET_EMPANADA = 'GET_EMPANADA'

export function getAllProducts(){
    return async function(dispatch){
        try {
            const result = await axios.get('https://pistachos.herokuapp.com/productos');
            console.log(result.data,'soy el action')
            return dispatch({
                type: ALL_PRODUCTS,
                payload: result.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function getEmpanadas(){
    return async function(dispatch){
        try {
            const result = await axios.get('https://pistachos.herokuapp.com/filtros/empanadas')
            console.log(result.data,'soy empanada')
            return dispatch({
                type: GET_EMPANADA,
                payload: result.data
                })
        } catch (error) {
            console.log(error)
        }
    }
}

export function AddToCart(id) {
    return async(dispatch) => {
        dispatch({
            type: ADD_TO_CART,
            payload: id
        })
    }
}

export function removeOneToCart(id){
    return async(dispatch) => {
        dispatch({
            type: REMOVE_ONE_TO_CART,
            payload: id
        })
    }
}