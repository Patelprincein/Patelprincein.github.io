import { useEffect, useState } from 'react'

type Direction = 'up' | 'down'

export const useScrollDirection = (threshold = 0) => {
  const [direction, setDirection] = useState<Direction>('up')

  useEffect(() => {
    let lastScrollY = window.scrollY

    const updateDirection = () => {
      const scrollY = window.scrollY
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        return
      }
      setDirection(scrollY > lastScrollY ? 'down' : 'up')
      lastScrollY = scrollY > 0 ? scrollY : 0
    }

    window.addEventListener('scroll', updateDirection)
    return () => window.removeEventListener('scroll', updateDirection)
  }, [threshold])

  return direction
}
