import { FiExternalLink } from 'react-icons/fi'
import Reveal from '../animations/Reveal'
import TiltCard from '../animations/TiltCard'
import type { PinnedRepo } from '../../hooks/useGithubPinnedRepos'

const GithubRepoCard = ({ repo }: { repo: PinnedRepo }) => (
  <Reveal>
    <TiltCard className="github-card">
      <div className="github-card__header">
        <span>{repo.language}</span>
        <span className="dot" style={{ backgroundColor: repo.languageColor || '#38bdf8' }}></span>
      </div>
      <h3>{repo.repo}</h3>
      <p>{repo.description}</p>
      <div className="github-card__meta">
        <span>★ {repo.stars}</span>
        <span>⑂ {repo.forks}</span>
      </div>
      <a className="ghost-link" href={repo.link} target="_blank" rel="noreferrer">
        View repo <FiExternalLink />
      </a>
    </TiltCard>
  </Reveal>
)

export default GithubRepoCard
