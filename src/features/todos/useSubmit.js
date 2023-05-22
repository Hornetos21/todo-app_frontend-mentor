import { useDispatch } from 'react-redux'
import { addTodo } from './todo-slice.js'

export const useSubmit = () => {
  const dispatch = useDispatch()

  return (event) => {
    event.preventDefault()

    dispatch(addTodo(event.target.title.value))
    event.target.reset()
  }
}
