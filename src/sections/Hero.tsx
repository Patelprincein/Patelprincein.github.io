import { motion } from 'framer-motion'
import { siteConfig } from '../config/siteConfig'
import FloatingOrbs from '../components/animations/FloatingOrbs'
import { getIconComponent } from '../utils/iconMap'

const Hero = () => {
  return (
    <section id="hero" className="section hero">
      <FloatingOrbs />
      <div className="container hero-grid">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="eyebrow">{siteConfig.role}</p>
          <h1>{siteConfig.hero.title}</h1>
          <p className="lead">{siteConfig.hero.subtitle}</p>
          <p>{siteConfig.hero.description}</p>
          <div className="hero-actions">
            <motion.a whileHover={{ scale: 1.02 }} className="button" href={siteConfig.hero.ctaPrimary.href}>
              {siteConfig.hero.ctaPrimary.label}
            </motion.a>
            <motion.a whileHover={{ scale: 1.02 }} className="button button--ghost" href={siteConfig.hero.ctaSecondary.href}>
              {siteConfig.hero.ctaSecondary.label}
            </motion.a>
          </div>
          <div className="hero-socials">
            {siteConfig.socials.map((social) => {
              const Icon = getIconComponent(social.icon)
              return (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                  <Icon /> {social.label}
                </a>
              )
            })}
          </div>
        </motion.div>
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          <div className="hero-portrait">
            <img
              src={siteConfig.hero.portrait}
              alt={`${siteConfig.name} portrait placeholder`}
              loading="lazy"
            />
            <p className="muted">Replace with your own photo located at public/assets/profile-placeholder.png</p>
          </div>
          <div className="hero-learning">
            <p>Currently exploring</p>
            <ul>
              {siteConfig.learningNow.focusAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
