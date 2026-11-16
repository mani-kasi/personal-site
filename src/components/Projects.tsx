import type { ProjectItem } from '../data/siteContent'
import ProjectFeature from './ProjectFeature'
type ProjectsProps = {
  projects: ProjectItem[]
}

function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-14 border-t border-ink/15">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="space-y-14 lg:space-y-20">
          {projects.map((project, index) => (
            <ProjectFeature key={project.title} project={project} flipped={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
