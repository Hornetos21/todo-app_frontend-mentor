import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodo } from './todo-slice.js'

const Todo = ({ todo, innerRef, draggableProps, dragHandleProps }) => {
  const dispatch = useDispatch()
  /*  return (
    <Reorder.Item className="todo" value={todo} id={todo.id}>
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
    </Reorder.Item>
  )*/
  return (
    <li className="todo" {...innerRef} {...draggableProps} {...dragHandleProps}>
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
  )
}

export default Todo
