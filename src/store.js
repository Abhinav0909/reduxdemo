import { createStore } from "redux";
import rootReducer from "./rootReducer";

const store = createStore(
    rootReducer,
    //this is used for using redux extension in chrome.
    window._REDUX_DEVTOOLS_EXTENSION_&&Window._REDUX_DEVTOOLS_EXTENSION_()
)
export default store;