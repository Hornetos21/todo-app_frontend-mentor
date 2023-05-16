import { useEffect, useState } from 'react'

const useMediaQuery = (str) => {
  const [mediaQuery, setMediaQuery] = useState(window.matchMedia(str).matches)

  useEffect(() => {
    window
      .matchMedia(str)
      .addEventListener('change', (e) => setMediaQuery(e.matches))
  }, [mediaQuery, str])

  return mediaQuery
}

export default useMediaQuery
