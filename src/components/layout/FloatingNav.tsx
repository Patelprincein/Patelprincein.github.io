import { navLinks } from '../../config/siteConfig'
import { useScrollDirection } from '../../hooks/useScrollDirection'

const FloatingNav = () => {
  const direction = useScrollDirection(4)

  return (
    <nav aria-label="Section shortcuts" className={`floating-nav ${direction === 'down' ? 'floating-nav--hidden' : ''}`}>
      {navLinks.slice(0, 5).map((link) => (
        <a key={link.id} href={`#${link.id}`}>
          {link.label}
        </a>
      ))}
    </nav>
  )
}

export default FloatingNav
