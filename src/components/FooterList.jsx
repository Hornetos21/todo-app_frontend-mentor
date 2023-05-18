import Filters from './Filters.jsx'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearCompleted,
  selectVisibleTodos,
} from '../features/todos/todo-slice.js'

const FooterList = () => {
  const dispatch = useDispatch()
  const todosLeft = useSelector((state) => selectVisibleTodos(state, 'active'))
  const handleClear = () => dispatch(clearCompleted())

  return (
    <div className="footer-list block">
      <div className="length-todos">
        {todosLeft.length} item{todosLeft.length === 1 ? '' : 's'} left
      </div>
      <Filters />
      <span className="clear-btn" onClick={handleClear}>
        Clear Completed
      </span>
    </div>
  )
}

export default FooterList
