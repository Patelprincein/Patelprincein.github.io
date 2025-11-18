import SectionHeading from '../components/shared/SectionHeading'
import ProjectCard from '../components/cards/ProjectCard'
import Reveal from '../components/animations/Reveal'
import { siteConfig } from '../config/siteConfig'

const Projects = () => (
  <section id="projects" className="section projects">
    <div className="container">
      <SectionHeading
        eyebrow="Projects"
        title="Featured research & builds"
        description="Cards pull data from src/config/siteConfig.ts. Update once, see the gallery refresh everywhere."
      />
      <div className="featured-projects">
        {siteConfig.projects.featured.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <div className="project-gallery">
        {siteConfig.projects.gallery.map((project) => (
          <Reveal key={project.title}>
            <article className="gallery-card">
              <div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
              </div>
              <ul className="tag-list">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <a className="ghost-link" href={project.repo} target="_blank" rel="noreferrer">
                Open on GitHub
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

export default Projects
