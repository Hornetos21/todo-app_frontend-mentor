import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { removeTodo, toggleTodo } from '../store/todos/todos-actions'
import { selectVisibleTodos } from '../store/todos/todos-selectors'

export const TodoList = () => {
  const dispatch = useDispatch()
  const { filter } = useParams()
  const todos = useSelector((state) => selectVisibleTodos(state, filter))

  return (
    <ul className="list">
      {todos.map((todo) => (
        <li className="todo" key={todo.id}>
          {/*<div className="checker"></div>*/}
          <input
            className="checker"
            id={`task-${todo.id}`}
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          <label htmlFor={`task-${todo.id}`}>{todo.title}</label>
          <button
            className="delete-btn"
            onClick={() => dispatch(removeTodo(todo.id))}
          ></button>
        </li>
      ))}
    </ul>
  )
}
