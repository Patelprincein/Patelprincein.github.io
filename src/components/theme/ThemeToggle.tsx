import { FiMoon, FiSun } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { useTheme } from './ThemeProvider'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button className="theme-toggle" aria-label="Toggle theme" onClick={toggleTheme}>
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 220, damping: 15 }}
      >
        {theme === 'dark' ? <FiSun /> : <FiMoon />}
      </motion.span>
    </button>
  )
}

export default ThemeToggle
