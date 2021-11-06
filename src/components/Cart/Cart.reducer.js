//reducer just changes the state of the store according to the action
import {
  Add_To_Cart,
  SHOW_PRODUCTS_IN_CART,
  HIDE_PRODUCTS_IN_CART,
} from "./Cart.types";
const cartIntialState = {
  products: [],
  showProducts: false,
};
const cartReducer = (state = cartIntialState, action) => {
  switch (action.type) {
    case Add_To_Cart:
      return { ...state, products: [...state.products, action.payload] };
    case SHOW_PRODUCTS_IN_CART:
      return { ...state, show_products: true };
    case HIDE_PRODUCTS_IN_CART:
      return { ...state, show_products: false };
    //in default statement we just return the intial state because for the first type it will return the intial state
    default:
      return state;
  }
};
export default cartReducer;
