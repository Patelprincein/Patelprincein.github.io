import Reveal from '../components/animations/Reveal'
import SectionHeading from '../components/shared/SectionHeading'
import { siteConfig } from '../config/siteConfig'

const About = () => (
  <section id="about" className="section about">
    <div className="container">
      <SectionHeading
        eyebrow="About"
        title="Engineer + ethical hacking learner"
        description="Intentional, curiosity-fueled, and obsessed with bridging software craftsmanship and security research."
      />
      <div className="about-grid">
        {siteConfig.about.paragraphs.map((paragraph) => (
          <Reveal key={paragraph}>
            <p>{paragraph}</p>
          </Reveal>
        ))}
      </div>
      <div className="about-stats">
        {siteConfig.about.stats.map((stat) => (
          <Reveal key={stat.label}>
            <div className="stat-card">
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

export default About
