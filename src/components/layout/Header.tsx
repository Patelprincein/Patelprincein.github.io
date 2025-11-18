import { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { navLinks, siteConfig } from '../../config/siteConfig'
import { useScrollDirection } from '../../hooks/useScrollDirection'
import ThemeToggle from '../theme/ThemeToggle'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isTop, setIsTop] = useState(true)
  const direction = useScrollDirection(8)

  useEffect(() => {
    const handleScroll = () => setIsTop(window.scrollY < 10)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const handler = () => setMenuOpen(false)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [menuOpen])

  const headerClass = [
    'site-header',
    !isTop ? 'site-header--glass' : '',
    direction === 'down' && !isTop ? 'site-header--hidden' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header className={headerClass}>
      <div className="container header-inner">
        <a className="logo" href="#hero">
          <span>{siteConfig.name}</span>
          <span className="logo-pill">Builds</span>
        </a>
        <nav
          id="primary-navigation"
          aria-label="Primary"
          className={`primary-nav ${menuOpen ? 'is-open' : ''}`}
        >
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-cta">
          <ThemeToggle />
          <a className="ghost-link" href="#contact">
            Work with me
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
