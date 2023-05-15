import { useDispatch } from 'react-redux'
import { addTodo } from '../store/todos/todos-actions'

export const NewTodo = () => {
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target)
    dispatch(addTodo(event.target.title.value))
    event.target.reset()
  }

  return (
    <form className="form block radius" onSubmit={handleSubmit}>
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
