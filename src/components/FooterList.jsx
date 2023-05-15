import { Filters } from './Filters.jsx'
import { useSelector } from 'react-redux'
import { selectVisibleTodos } from '../store/todos/todos-selectors.js'

const FooterList = () => {
  const todosLeft = useSelector((state) => selectVisibleTodos(state, 'active'))

  return (
    <div className="footer-list block">
      <div>{todosLeft.length} items left</div>
      <Filters />
      <span className="clear-btn">Clear Completed</span>
    </div>
  )
}

export default FooterList
