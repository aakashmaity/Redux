import { combineReducers, createStore } from "redux";
import todoReducer from "./todoReducer.js";
import userReducer from "./userReducer.js";


const rootReducer = combineReducers({
    todoState: todoReducer,
    userState: userReducer
})

const store = createStore(rootReducer);

// Log the updated state whenever the store changes
store.subscribe(() => {
    console.log(store.getState());
})


export default store;
