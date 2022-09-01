import {
  POST_ORDEN,
  GET_PROMO,
  GET_LOMO,
  GET_HAMBURGUESAS,
  GET_MILANESAS,
  GET_PIZZAS,
  ADD_TO_CART,
  ALL_PRODUCTS,
  GET_EMPANADA,
  GET_BEBIDAS,
  GET_ORDENES,
  ORDER_ASC,
  ORDER_DES,
  GET_BY_PRODUCT,
  GET_PRODUCT_BY_ID,
} from "./action";

const InitialState = {
  allProducts: [],
  product: [],
  empanadas: [],
  bebidas: [],
  pizzas: [],
  milanesas: [],
  lomos: [],
  hamburguesas: [],
  promos: [],
  cart: [],
  ordenes: [],
  orden:[]
};

export default function rootReducer(state = InitialState, action) {
  switch (action.type) {

    case POST_ORDEN:{
      console.log("estoy aca", action.payload)
      return {
        ...state,
        orden: action.payload,
      }
    }

    case GET_PRODUCT_BY_ID:
      console.log(action.payload)
      return {
        ...state,
        product: action.payload
      }
    case GET_BY_PRODUCT: 
      return {
        ...state,
        allProducts: action.payload
      }
>>>>>>>>> Temporary merge branch 2
    case ORDER_DES:{
      return {
        ...state,
        ordenes: action.payload
      }
    }
    case ORDER_ASC:{
      return {
        ...state,
        ordenes: action.payload
      }
    }
    case GET_ORDENES: {
      return {
        ...state,
        ordenes: action.payload,
      };
    }
    case ALL_PRODUCTS: {
      return {
        ...state,
        product: action.payload,
        allProducts: action.payload,
      };
    }
    case GET_PROMO: {
      return {
        ...state,
        promos: action.payload,
      };
    }
    case GET_HAMBURGUESAS: {
      return {
        ...state,
        hamburguesas: action.payload,
      };
    }
    case GET_LOMO: {
      return {
        ...state,
        lomos: action.payload,
      };
    }
    case GET_MILANESAS: {
      return {
        ...state,
        milanesas: action.payload,
      };
    }
    case GET_PIZZAS: {
      return {
        ...state,
        pizzas: action.payload,
      };
    }
    case GET_BEBIDAS: {
      return {
        ...state,
        bebidas: action.payload,
      };
    }
    case GET_EMPANADA: {
      return {
        ...state,
        empanadas: action.payload,
      };
    }

    case ADD_TO_CART:
      // console.log(action.payload);
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
}
