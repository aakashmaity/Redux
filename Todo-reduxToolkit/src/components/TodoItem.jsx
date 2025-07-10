import { useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../redux/slices/todoSlices";

function TodoItem({id, text, isCompleted}) {
  const dispatch = useDispatch();

  function deleteTodo(){
    dispatch(removeTodo(id))
  }
  function toggle(){
    dispatch(toggleTodo(id))
  }
  
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={toggle}
      />
      <span className={isCompleted ? "completed" : ""}>{text}</span>
      <button className="delete-btn" onClick={deleteTodo}>X</button>
    </div>
  )
}

export default TodoItem