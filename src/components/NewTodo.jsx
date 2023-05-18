import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todos/todo-slice.js'

export const NewTodo = () => {
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()

    dispatch(addTodo(event.target.title.value))
    event.target.reset()
  }

  return (
    <form className="form block" onSubmit={handleSubmit}>
      <div className="checker"></div>
      <input
        type="text"
        name="title"
        placeholder="Create a new todo..."
        className="new-todo"
      />
      {/*<input type="submit" value="Add Todo" />*/}
    </form>
  )
}
