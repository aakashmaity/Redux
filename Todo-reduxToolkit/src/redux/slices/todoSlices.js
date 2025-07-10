import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers:{
        addTodo: (state, action) => {
            // No need to return a new array, just mutate/update the existing state
            state.push({id: Date.now(), text: action.payload, completed: false});
        },
        removeTodo: (state, action) => {
            // return a new array excluding the removed todo
            return state.filter(todo => todo.id !== action.payload); 
        },
        toggleTodo: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload);
            if (todo) { 
                todo.completed = !todo.completed; 
            }
        }
    }
})

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;



// Redux Toolkit automatically generates action functions  reducer (e.g. addTodo, removeTodo)
// - slice
//      - state
//      - actions
//      - reducer        