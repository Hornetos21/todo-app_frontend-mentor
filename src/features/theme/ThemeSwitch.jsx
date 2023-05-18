import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from './theme-slice.js'
import { useEffect } from 'react'
import iconMoon from '../../assets/icon-moon.svg'
import iconSun from '../../assets/icon-sun.svg'

const ThemeSwitch = () => {
  const dispatch = useDispatch()

  const theme = useSelector((state) => state.theme)
  const toggleTheme = () =>
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  const icon = theme === 'light' ? iconMoon : iconSun

  return <img className="icon" src={icon} alt="moon" onClick={toggleTheme} />
}

export default ThemeSwitch
