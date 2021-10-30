//reducer just changes the state of the store according to the action
import { Add_To_Cart } from "./Cart/Cart.types";
const cartIntialState = {
    products:[],
    showProducts:false,
};
const cartReducer = (state= cartIntialState,action)=>{
switch(action.type){
    case Add_To_Cart:
        return {...state,products:[...state.products,action.payload]}
        //in default statement we just return the intial state because for the first type it will return the intial state
        default:
            return state;
}
}
export default cartReducer;