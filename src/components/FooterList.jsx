import Filters from './Filters.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { selectVisibleTodos } from '../store/todos/todos-selectors.js'
import { clearCompleted } from '../store/todos/todos-actions.js'

const FooterList = () => {
  const todosLeft = useSelector((state) => selectVisibleTodos(state, 'active'))
  const dispatch = useDispatch()
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
