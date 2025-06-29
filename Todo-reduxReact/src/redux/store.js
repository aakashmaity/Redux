import todoReducer from "./reducers/todoReducer";
import userReducer from "./reducers/userReducer";
import { combineReducers } from "redux";
import { legacy_createStore as createStore} from 'redux'

const rootReducer = combineReducers({
    todoState: todoReducer,
    userState: userReducer
})

const store = createStore(rootReducer);


export default store;