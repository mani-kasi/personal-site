import type { ExperienceItem } from '../data/siteContent'
import SectionHeading from './SectionHeading'
import SlashList from './SlashList'

type ExperienceProps = {
  experiences: ExperienceItem[]
}

function ExperienceRow({ item }: { item: ExperienceItem }) {
  return (
    <li className="border-t border-ink/15 py-6 first:border-t-0 first:pt-0 lg:py-7">
      <article className="grid grid-cols-12 gap-x-6 gap-y-2 lg:gap-x-10">
        <p className="col-span-12 font-mono text-[0.8125rem] leading-relaxed text-ink-soft lg:col-span-3 lg:pt-1.5">
          {item.date}
        </p>

        <div className="col-span-12 lg:col-span-9">
          <h3 className="font-display text-xl font-bold leading-tight tracking-[-0.02em] sm:text-2xl">
            {item.company}
          </h3>
          <p className="mt-0.5 text-base font-medium text-ink/80">{item.role}</p>
          <p className="mt-3 max-w-[42rem] text-[0.9375rem] leading-relaxed text-ink/80 sm:text-base">{item.summary}</p>
          {item.technologies ? (
            <p className="mt-3 text-sm text-ink-soft">
              <SlashList items={item.technologies} />
            </p>
          ) : null}
        </div>
      </article>
    </li>
  )
}

function Experience({ experiences }: ExperienceProps) {
  return (
    <section id="experience" aria-labelledby="experience-title" className="scroll-mt-14 border-t border-ink/15">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <SectionHeading id="experience-title" title="Experience" note="Where I’ve worked" />

        <ol>
          {experiences.map((item) => (
            <ExperienceRow key={`${item.company}-${item.date}`} item={item} />
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Experience
