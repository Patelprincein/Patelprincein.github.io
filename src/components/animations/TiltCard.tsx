import clsx from 'clsx'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import type { MouseEvent, ReactNode } from 'react'

const TiltCard = ({ children, className }: { children: ReactNode; className?: string }) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10])

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect()
    const posX = event.clientX - bounds.left
    const posY = event.clientY - bounds.top
    const middleX = bounds.width / 2
    const middleY = bounds.height / 2
    x.set((posX - middleX) / middleX / 2)
    y.set((posY - middleY) / middleY / 2)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      className={clsx('tilt-card', className)}
      style={{ rotateX, rotateY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.div>
  )
}

export default TiltCard
