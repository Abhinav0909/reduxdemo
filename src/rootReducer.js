import { combineReducers } from "redux";
import cartReducer from "./components/Cart/Cart.reducer";

const rootReducer = combineReducers({
cart:cartReducer
})
export default rootReducer;