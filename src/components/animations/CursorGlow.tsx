import { useEffect, useState } from 'react'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return

    const handleMove = (event: PointerEvent) => {
      setPos({ x: event.clientX, y: event.clientY })
    }
    window.addEventListener('pointermove', handleMove)
    return () => window.removeEventListener('pointermove', handleMove)
  }, [prefersReducedMotion])

  if (prefersReducedMotion) {
    return null
  }

  return <div className="cursor-glow" style={{ transform: `translate(${pos.x - 150}px, ${pos.y - 150}px)` }} />
}

export default CursorGlow
