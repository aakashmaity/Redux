import { useDispatch } from "react-redux";
import { removeTodoActionCreator, toggleTodoActionCreator } from "../redux/actions/todoActions";

function TodoItem({id, text, isCompleted}) {
  const dispatch = useDispatch();

  function deleteTodo(){
    dispatch(removeTodoActionCreator(id))
  }
  function toggleTodo(){
    dispatch(toggleTodoActionCreator(id))
  }
  
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={toggleTodo}
      />
      <span className={isCompleted ? "completed" : ""}>{text}</span>
      <button className="delete-btn" onClick={deleteTodo}>X</button>
    </div>
  )
}

export default TodoItem