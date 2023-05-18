import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import iconMoon from '../assets/icon-moon.svg'
import iconSun from '../assets/icon-sun.svg'
import { setTheme } from '../store/theme/theme-action'

const Header = () => {
  const dispatch = useDispatch()

  const theme = useSelector((state) => state.theme)
  const toggleTheme = () =>
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <div className="header">
      <h1>TODO</h1>
      <img
        className="icon"
        src={theme === 'light' ? iconMoon : iconSun}
        alt="moon"
        onClick={toggleTheme}
      />
    </div>
  )
}

export default Header
