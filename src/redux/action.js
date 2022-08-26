import data from '../data/data'

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_ONE_TO_CART = 'REMOVE_ONE_TO_CART'
export const REMOVE_ALL_TO_CART = 'REMOVE_ALL_TO_CART'
export const CLEAR_CART = 'CLEAR_CART'

export function AddToCart(id) {
    return async(dispatch) => {
        dispatch({
            type: ADD_TO_CART,
            payload: id
        })
    }
}