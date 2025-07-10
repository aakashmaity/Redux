import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlices";

function TodoInput() {

    const dispatch = useDispatch(); 
    const [todo, setTodo] = useState('');

    function addTodoToStore() {
        if(todo.length > 0){
            dispatch(addTodo(todo));
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