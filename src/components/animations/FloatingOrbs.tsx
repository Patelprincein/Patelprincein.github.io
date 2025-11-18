import { motion } from 'framer-motion'
import { useMemo } from 'react'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'

const colors = ['#38bdf8', '#a855f7', '#22d3ee', '#f472b6']

const FloatingOrbs = () => {
  const prefersReducedMotion = usePrefersReducedMotion()

  const shapes = useMemo(() => {
    if (prefersReducedMotion) return []
    return Array.from({ length: 8 }).map((_, idx) => ({
      id: idx,
      size: Math.random() * 140 + 80,
      x: Math.random() * 80,
      y: Math.random() * 60,
      color: colors[idx % colors.length],
      delay: Math.random() * 4,
    }))
  }, [prefersReducedMotion])

  if (prefersReducedMotion) {
    return null
  }

  return (
    <div className="floating-orbs" aria-hidden="true">
      {shapes.map((shape) => (
        <motion.span
          key={shape.id}
          className="floating-orbs__orb"
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            borderColor: shape.color,
          }}
          animate={{ y: [0, -20, 20, 0], rotate: [0, 8, -8, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: shape.delay }}
        />
      ))}
    </div>
  )
}

export default FloatingOrbs
