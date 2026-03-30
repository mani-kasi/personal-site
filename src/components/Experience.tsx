import type { ExperienceItem, TechStackItem } from '../data/siteContent'
import ExperienceTimeline from './ExperienceTimeline'
import SectionHeading from './SectionHeading'
import TechStack from './TechStack'

type ExperienceProps = {
  skills: TechStackItem[]
  experiences: ExperienceItem[]
}

function Experience({ skills, experiences }: ExperienceProps) {
  return (
    <section
      id="experience"
      className="scroll-mt-28 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          title="EXPERIENCE"
        />
        <TechStack skills={skills} />
        <ExperienceTimeline items={experiences} />
      </div>
    </section>
  )
}

export default Experience
