import { useSubmit } from './useSubmit.js'

export const NewTodo = () => {
  const handleSubmit = useSubmit()

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
