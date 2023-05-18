import { Link, useParams } from 'react-router-dom'
import useMediaQuery from '../hooks/useMediaQuery.js'

const Filters = () => {
  const { filter: activeFilter = 'all' } = useParams()
  const mediaQuery = useMediaQuery('(min-width: 550px)')
  const clazz = (str) => (activeFilter === str ? 'link--active link' : 'link')

  const classMedia = mediaQuery ? '' : 'theme--mobile block'

  return (
    <div className={`filters ${classMedia}`}>
      <Link to="/all" className={clazz('all')}>
        All
      </Link>
      <Link to="/active" className={clazz('active')}>
        Active
      </Link>
      <Link to="/completed" className={clazz('completed')}>
        Completed
      </Link>
    </div>
  )
}

export default Filters
