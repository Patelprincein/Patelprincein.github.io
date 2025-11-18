import LearningCard from '../components/cards/LearningCard'
import SectionHeading from '../components/shared/SectionHeading'
import Reveal from '../components/animations/Reveal'
import { siteConfig } from '../config/siteConfig'

const Learning = () => (
  <section id="learning" className="section learning">
    <div className="container learning-grid">
      <SectionHeading
        eyebrow="Learning now"
        title="Constant experiments"
        description="Directly editable in the config file to reflect current study tracks."
      />
      <LearningCard />
      <Reveal>
        <div className="learning-quote">
          <p className="eyebrow">Mantra</p>
          <p>
            Curiosity + documentation beats speed. I log every lab, track energy, and reflect weekly to stay accountable to
            future me.
          </p>
          <p className="muted">Based in {siteConfig.location}</p>
        </div>
      </Reveal>
    </div>
  </section>
)

export default Learning
