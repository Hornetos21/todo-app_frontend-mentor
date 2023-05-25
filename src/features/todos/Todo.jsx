import { useDispatch } from 'react-redux'
import { removeTodo, toggleTodo } from './todo-slice'
import { Draggable } from 'react-beautiful-dnd'

const Todo = ({ todo, index }) => {
  const dispatch = useDispatch()

  return (
    <Draggable draggableId={todo.id} index={index}>
      {(provided, snapshot) => (
        <li
          className={snapshot.isDragging ? 'todo todo--dragging' : 'todo'}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
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
      )}
    </Draggable>
  )
}

export default Todo
