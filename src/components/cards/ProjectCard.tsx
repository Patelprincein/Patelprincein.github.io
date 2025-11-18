import { FiExternalLink, FiGithub } from 'react-icons/fi'
import TiltCard from '../animations/TiltCard'
import type { ProjectMeta } from '../../config/siteConfig'
import Reveal from '../animations/Reveal'

const ProjectCard = ({ project }: { project: ProjectMeta }) => {
  return (
    <Reveal>
      <TiltCard className="project-card">
        {project.highlight && <span className="project-highlight">{project.highlight}</span>}
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <ul className="tag-list">
          {project.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="project-links">
          <a href={project.repo} target="_blank" rel="noreferrer">
            <FiGithub /> Repo
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer">
              <FiExternalLink /> Live
            </a>
          )}
        </div>
      </TiltCard>
    </Reveal>
  )
}

export default ProjectCard
