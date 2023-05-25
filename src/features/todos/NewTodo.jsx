import { useSubmit } from './useSubmit'

const NewTodo = () => {
  const handleSubmit = useSubmit()

  return (
    <form className="form block" onSubmit={handleSubmit}>
      <button className="submit-btn checker" onSubmit={handleSubmit}>
        <div className="arrow"></div>
      </button>
      <input
        type="text"
        name="title"
        placeholder="Create a new todo..."
        className="new-todo"
      />
    </form>
  )
}
export default NewTodo
