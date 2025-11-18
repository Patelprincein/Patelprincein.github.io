import { Suspense, lazy } from 'react'
import SectionHeading from '../components/shared/SectionHeading'
import Reveal from '../components/animations/Reveal'
import { siteConfig } from '../config/siteConfig'

const SkillsRadar = lazy(() => import('../components/charts/SkillsRadar'))

const Skills = () => (
  <section id="skills" className="section skills">
    <div className="container">
      <SectionHeading
        eyebrow="Skills"
        title="Toolbox & heatmap"
        description="Every skill lives in a single config file so you can add or reorder anything without editing UI code."
      />
      <div className="skills-grid">
        {siteConfig.skills.categories.map((category) => (
          <Reveal key={category.title}>
            <article className="skill-card">
              <h3>{category.title}</h3>
              <ul>
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
        <Reveal>
          <div className="skill-card skill-card--radar" role="region" aria-label="Skill radar chart">
            <h3>Skill radar</h3>
            <Suspense fallback={<p className="muted">Loading skill radar...</p>}>
              <SkillsRadar />
            </Suspense>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
)

export default Skills
