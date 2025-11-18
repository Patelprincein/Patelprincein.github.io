import { siteConfig } from '../../config/siteConfig'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <p>© {year} {siteConfig.name}. Built with React, Vite, MDX, and endless curiosity.</p>
          <p className="muted">Made in Fredericton · {siteConfig.role}</p>
        </div>
        <div className="footer-links">
          {siteConfig.socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
