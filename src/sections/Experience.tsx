import SectionHeading from '../components/shared/SectionHeading'
import Reveal from '../components/animations/Reveal'
import { siteConfig } from '../config/siteConfig'

const Experience = () => (
  <section id="experience" className="section experience">
    <div className="container">
      <SectionHeading
        eyebrow="Experience"
        title="Education & practice"
        description="Structured timeline with simple arrays for future co-ops or research roles."
      />
      <div className="timeline">
        {siteConfig.experience.map((item) => (
          <Reveal key={item.company + item.role}>
            <article className="timeline-card">
              <header>
                <p className="eyebrow">{item.period}</p>
                <h3>{item.role}</h3>
                <p className="muted">{item.company}</p>
                {item.location && <p className="muted">{item.location}</p>}
              </header>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

export default Experience
