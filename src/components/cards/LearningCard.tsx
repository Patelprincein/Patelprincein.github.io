import { siteConfig } from '../../config/siteConfig'
import Reveal from '../animations/Reveal'

const LearningCard = () => {
  return (
    <Reveal>
      <div className="learning-card">
        <p className="eyebrow">Learning radar · {siteConfig.learningNow.lastUpdated}</p>
        <h3>What I'm digging into</h3>
        <ul>
          {siteConfig.learningNow.focusAreas.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </Reveal>
  )
}

export default LearningCard
