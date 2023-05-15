import iconMoon from '../assets/icon-moon.svg'
import iconSun from '../assets/icon-sun.svg'
import { useEffect } from 'react'
const Header = () => {
  const theme = 'light'
  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])
  return (
    <div className="header">
      <h1>TODO</h1>
      <img className="icon" src={iconMoon} alt="moon" />
    </div>
  )
}

export default Header
