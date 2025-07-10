import { useSelector } from "react-redux"
import TodoItem from "./TodoItem"

function TodoList() {
  const todos = useSelector(state => state.todos)

  return (
    <div>
        { todos.map(todo => {
            return (
                <TodoItem key={todo.id} id={todo.id} text={todo.text} isCompleted={todo.completed} />
            )
        })}
    </div>
  )
}
export default TodoList