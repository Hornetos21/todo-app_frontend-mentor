import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Reorder } from 'framer-motion'
import { removeTodo, selectVisibleTodos, toggleTodo } from './todo-slice.js'

export const TodoList = () => {
  const dispatch = useDispatch()
  const { filter } = useParams()
  const data = useSelector((state) => selectVisibleTodos(state, filter))

  // const [todos, setTodos] = useState(data)
  // useEffect(() => {
  //   // console.log('effect:', todos)
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
