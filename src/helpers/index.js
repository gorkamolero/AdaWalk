import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    if (window.scollY === 0) return
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [pathname])

  return null
}

export function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  return null
}