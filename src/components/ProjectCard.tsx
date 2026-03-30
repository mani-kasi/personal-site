import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, FolderGit2 } from 'lucide-react'
import type { ProjectItem } from '../data/siteContent'

type ProjectCardProps = {
  project: ProjectItem
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article
      className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-card/80 shadow-ambient"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(181,124,255,0.18),transparent_28%)] opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="relative flex h-64 items-center justify-center overflow-hidden border-b border-border bg-[#0d0916]">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-transparent" />
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          className="relative z-10 h-full w-full object-cover"
        />
      </div>

      <div className="relative flex flex-1 flex-col p-6">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-text">{project.title}</h3>
          <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-accent-soft">
            {project.subtitle}
          </p>
        </div>

        <div className="mt-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
              Description
            </p>
            <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>
          </div>
        </div>

        <div className="mt-auto space-y-5 pt-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
              Tech Used
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-soft"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
              GitHub
            </p>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-full border border-border bg-bg-soft px-4 py-2 text-sm font-medium text-text transition duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent/10 hover:text-accent-soft"
              aria-label={`Open ${project.title} GitHub repository`}
            >
              <FolderGit2 size={16} />
              <span>View Repo</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
