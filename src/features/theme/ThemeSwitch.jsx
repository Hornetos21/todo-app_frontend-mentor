import iconMoon from '../../assets/icon-moon.svg'
import iconSun from '../../assets/icon-sun.svg'
import { useSetTheme } from './useSetTheme.js'

const ThemeSwitch = () => {
  const [theme, toggleTheme] = useSetTheme()

  const icon = theme === 'light' ? iconMoon : iconSun

  return <img className="icon" src={icon} alt="moon" onClick={toggleTheme} />
}

export default ThemeSwitch
