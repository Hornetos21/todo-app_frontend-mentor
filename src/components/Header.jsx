import iconMoon from '../assets/icon-moon.svg'
import iconSun from '../assets/icon-sun.svg'
import { useEffect, useState } from 'react'

const Header = () => {
  const themeInit = 'light'
  const [theme, setTheme] = useState(themeInit)
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
        onClick={() =>
          theme === 'light' ? setTheme('dark') : setTheme('light')
        }
      />
    </div>
  )
}

export default Header
