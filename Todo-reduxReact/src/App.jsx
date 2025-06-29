import './App.css'
import TodoInput from './components/TodoInput.jsx'
import TodoList from './components/TodoList.jsx'

function App() {

  return (
    <div>
      <h2> Todo App</h2>
      <p>Welcome to the Todo App! This is a simple application to manage your tasks.</p>
      <TodoInput/>
      <TodoList />
    </div>
  )
}

export default App
