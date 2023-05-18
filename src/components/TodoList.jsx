import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { removeTodo, toggleTodo } from '../store/todos/todos-actions'
import { selectVisibleTodos } from '../store/todos/todos-selectors'
import { Reorder } from 'framer-motion'

export const TodoList = () => {
  const dispatch = useDispatch()
  const { filter } = useParams()
  // const data = useSelector((state) => selectVisibleTodos(state, filter))
  const data = useSelector((state) => selectVisibleTodos(state, filter))

  // const [todos, setTodos] = useState(data)
  // useEffect(() => {
  //   saveState({ todos })
  // }, [todos])

  return (
    <ul className="list">
      <Reorder.Group values={data} onReorder={() => {}} axis="y">
        {data.map((todo) => (
          <Reorder.Item
            className="todo"
            key={todo.id}
            value={todo}
            id={todo.id}
            as="li"
          >
            {/*<li className="todo">*/}
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
            {/*</li>*/}
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </ul>
  )
}
