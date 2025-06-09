import { addTodoActionCreator, addUserActionCreator, removeTodoActionCreator } from "./actionCreator.js";
import store from "./store.js";

store.dispatch(addTodoActionCreator("Learn Redux"));
store.dispatch(addTodoActionCreator("Build a Todo App"));
store.dispatch(addTodoActionCreator("Test the App"));
store.dispatch(addTodoActionCreator("Deploy the App"));

console.log(store.getState().todoState);

store.dispatch(addUserActionCreator({ name: "John Doe", age: 30 }));

console.log(store.getState().userState);


console.log(store.getState())