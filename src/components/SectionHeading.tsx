import Reveal from './Reveal'

type SectionHeadingProps = {
  id: string
  title: string
  srPrefix?: string
  note?: string
  tone?: 'light' | 'blue'
}

function SectionHeading({ id, title, srPrefix, note, tone = 'light' }: SectionHeadingProps) {
  const onBlue = tone === 'blue'

  return (
    <Reveal className="mb-8 lg:mb-10">
      <div className="flex items-baseline justify-between gap-6">
        <div className="flex items-baseline gap-3 sm:gap-4">
          <h2 id={id} className="font-display text-3xl font-bold leading-none tracking-[-0.03em] sm:text-4xl">
            {srPrefix ? <span className="sr-only">{srPrefix} </span> : null}
            {title}
          </h2>
        </div>
        {note ? (
          <p className={`hidden text-sm sm:block ${onBlue ? 'text-paper/85' : 'text-ink-soft'}`}>{note}</p>
        ) : null}
      </div>
    </Reveal>
  )
}

export default SectionHeading
