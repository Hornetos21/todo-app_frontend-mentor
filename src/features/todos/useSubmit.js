import { useDispatch } from 'react-redux'
import { addTodo } from './todo-slice.js'

export const useSubmit = () => {
  const dispatch = useDispatch()

  return (event) => {
    event.preventDefault()
    const text = event.target.title.value
    if (!text) return

    dispatch(addTodo(text))
    event.target.reset()
  }
}
