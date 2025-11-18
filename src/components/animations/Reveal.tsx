import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion'

type RevealProps = {
  children: ReactNode
  delay?: number
}

const Reveal = ({ children, delay = 0 }: RevealProps) => {
  const prefersReducedMotion = usePrefersReducedMotion()

  if (prefersReducedMotion) {
    return <div>{children}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, type: 'spring', stiffness: 120 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
