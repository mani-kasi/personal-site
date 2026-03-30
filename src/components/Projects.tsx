import type { ProjectItem } from '../data/siteContent'
import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'

type ProjectsProps = {
  projects: ProjectItem[]
}

function Projects({ projects }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="scroll-mt-28 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          title="PROJECTS"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
