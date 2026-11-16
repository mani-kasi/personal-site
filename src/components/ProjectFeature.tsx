import type { ProjectItem } from '../data/siteContent'
import Reveal from './Reveal'
import SlashList from './SlashList'
import TextLink from './TextLink'
import VideoThumb from './VideoThumb'

type ProjectFeatureProps = {
  project: ProjectItem
  flipped?: boolean
}

const ratioClass: Record<ProjectItem['media']['ratio'], string> = {
  '4/3': 'aspect-[4/3]',
  '16/10': 'aspect-[16/10]',
  '16/9': 'aspect-video',
}

function ProjectFeature({ project, flipped = false }: ProjectFeatureProps) {
  const { media } = project
  const isProcess = project.tagsLabel === 'Process'
  const links = [
    ...project.links,
    ...(media.play ? [{ label: media.play.linkLabel, href: media.play.href }] : []),
  ]

  return (
    <Reveal>
      <article className="grid grid-cols-12 items-center gap-x-6 gap-y-6 lg:gap-x-12">
        <figure className={`col-span-12 lg:col-span-7 ${flipped ? 'lg:order-2' : ''}`}>
          <div className="bg-soft p-2.5 sm:p-3">
            <div className={`overflow-hidden bg-ink ${media.play ? '' : ratioClass[media.ratio]}`}>
              {media.play ? (
                <VideoThumb
                  href={media.play.href}
                  alt={media.alt}
                  label={media.play.label}
                  aspectClass="aspect-video"
                />
               ) : (
                <div className={`h-full w-full ${ratioClass[media.ratio]}`}>
                  <img
                    src={media.src}
                    alt={media.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </div>
          <figcaption className="mt-2 text-sm text-ink-soft">{media.caption}</figcaption>
        </figure>

        <div className={`col-span-12 lg:col-span-5 ${flipped ? 'lg:order-1' : ''}`}>
          <p className="flex items-baseline gap-3 text-sm text-ink-soft">
            <span aria-hidden="true" className="font-mono text-blue">
              {project.number}
            </span>
            {project.category}
          </p>
          <h3 className="mt-2 font-display text-[1.75rem] font-bold leading-[1.1] tracking-[-0.03em] sm:text-4xl">
            {project.title}
          </h3>

          <div className="mt-4 space-y-3 text-base leading-relaxed text-ink/85">
            {project.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <p className="mt-5 text-sm leading-relaxed text-ink-soft">
            <span className="font-medium text-ink">{project.tagsLabel}: </span>
            <SlashList items={project.tags} separator={isProcess ? '→' : '·'} />
          </p>

          {links.length > 0 || project.story ? (
            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <TextLink href={link.href}>{link.label}</TextLink>
                </li>
              ))}
              {project.story ? (
                <li>
                  <TextLink href={project.story.href}>{project.story.title.replace(/\.$/, '')}</TextLink>
                  <span className="ml-1 text-sm text-ink-soft">· {project.story.eyebrow.toLowerCase()}</span>
                </li>
              ) : null}
            </ul>
          ) : null}
        </div>
      </article>
    </Reveal>
  )
}

export default ProjectFeature
