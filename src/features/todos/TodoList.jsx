import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Reorder } from 'framer-motion'
import { removeTodo, selectVisibleTodos, toggleTodo } from './todo-slice.js'
import { useState } from 'react'

export const TodoList = () => {
  const dispatch = useDispatch()
  const { filter } = useParams()
  const data = useSelector((state) => selectVisibleTodos(state, filter))
  //
  const [todos, setTodos] = useState(data)
  // useEffect(() => {
  // console.log('effect:', todos)
  // dispatch(reorder(todos))
  // }, [dispatch, todos])

  return (
    <Reorder.Group
      className="list"
      values={todos}
      onReorder={setTodos}
      axis="y"
    >
      {todos.map((todo) => (
        <Reorder.Item
          className="todo"
          key={todo.id}
          value={todo}
          id={todo.id}
          // as="li"
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
  )
}
