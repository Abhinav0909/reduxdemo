//Actions are just a piece of information that tells store that something has changed but it does not tell what has changed.
import { Add_To_Cart,SHOW_PRODUCTS_IN_CART,HIDE_PRODUCTS_IN_CART } from "./Cart.types";
export const addToCart = (product) => ({
  type: Add_To_Cart, //type is just a short description of what your doing
  payload: product, //what are the datas that are passed to action like name,age
});

export const showCartProducts = () =>({
  type:SHOW_PRODUCTS_IN_CART
})
export const hideCartProducts = () =>({
  type:HIDE_PRODUCTS_IN_CART
})
