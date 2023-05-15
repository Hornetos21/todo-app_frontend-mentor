import { Link, useParams } from 'react-router-dom'

const Filters = () => {
  const { filter: activeFilter = 'all' } = useParams()
  const clazz = (str) => (activeFilter === str ? 'link--active link' : 'link')

  return (
    <div className="filters filters--mobile block">
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

export { Filters }
