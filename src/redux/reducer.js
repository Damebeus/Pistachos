import { ADD_TO_CART, ALL_PRODUCTS,GET_EMPANADA } from "./action";

const InitialState = {
  allProducts: [],
  product: [],
  empanadas:[],
  cart: [],
};

export default function rootReducer(state = InitialState, action) {
  switch (action.type) {
    case ALL_PRODUCTS:{
      console.log(action.payload,'soy el reducer')
      return {
        ...state,
        product: action.payload,
        allProducts: action.payload,
      };
    }
    case GET_EMPANADA:{
      return{
        ...state,
        empanadas: action.payload,
      }
    }
    default:
      return state;
  }
}
