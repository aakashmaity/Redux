import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoActionCreator } from "../redux/actions/todoActions";

function TodoInput() {

    const dispatch = useDispatch(); // this dispatch function is already connected to the store

    const [todo, setTodo] = useState('');

    function addTodoToStore() {
        if(todo.length > 0){
            dispatch(addTodoActionCreator(todo));
            setTodo('')
        }
    }

    return (
        <div>
            <input type="text" onChange={e => setTodo(e.target.value)} value={todo}/>
            <button onClick={addTodoToStore}>Add Todo ...</button>
        </div>
    )
}

export default TodoInput;