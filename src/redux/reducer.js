import { ADD_TO_CART } from "./action";
import data from "../data/data";
const InitialState = {
    allProducts: [{
      id: 1,
      name: "Coca-Cola",
      img: "https://p.turbosquid.com/ts-thumb/Xh/Oju58t/ps/001_product/png/1619525402/600x600/fit_q87/829e146a8d09c27ec0dcf15d89f70906f44e9fb7/001_product.jpg",
      description: "una botellita de coca pa",
      category: "Bebidas",
      price: "1.00",
      cuantity: 0,
    },
    {
      id: "2",
      name: "Fanta",
      img: "https://jumboargentina.vtexassets.com/arquivos/ids/526810-800-600?v=636885193186300000&width=800&height=600&aspect=true",
      description: "una botellita de Fanta pa",
      category: "Bebidas",
      price: "2.00",
      cuantity: 0,
    },
    {
      id: "3",
      name: "Pizza de Anana",
      img: "https://www.recetasdesbieta.com/wp-content/uploads/2018/09/Como-hacer-pizza-casera-rapida-con-masa-de-pizza-sin-repos-1.jpg",
      description: "pizza de anana",
      category: "pizza",
      price: "1170",
      cuquantity: 0,
    },
    {
      id: "4",
      name: "Pizza de Anchoa",
      img: "https://www.recetasdesbieta.com/wp-content/uploads/2018/09/Como-hacer-pizza-casera-rapida-con-masa-de-pizza-sin-repos-1.jpg",
      description: "pizza de anchoa",
      category: "pizza",
      price: "1110",
      cuquantity: 0,
    },],
    cart: [],
};

export default function rootReducer(state = InitialState, action) {
  switch (action.type) {
    case ADD_TO_CART:{
        const item = state.allProducts.id
          // Check if Item is in cart already
          console.log(item,`ebeus puto`)
          return {
            ...state,
            cart: item
          };
    }
    default:
      return state;
  }
}
