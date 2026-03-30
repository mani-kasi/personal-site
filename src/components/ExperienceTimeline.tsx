import { motion, useReducedMotion } from 'framer-motion'
import type { ExperienceItem } from '../data/siteContent'

type ExperienceTimelineProps = {
  items: ExperienceItem[]
}

function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="relative mt-10">
      <div className="absolute bottom-0 left-4 top-0 w-px bg-gradient-to-b from-accent/65 via-accent/25 to-accent/5 md:left-1/2" />

      <div className="space-y-8">
        {items.map((item, index) => {
          const isEven = index % 2 === 0

          return (
            <div
              key={`${item.company}-${item.date}`}
              className={`relative flex pl-12 md:pl-0 ${
                isEven ? 'md:justify-start' : 'md:justify-end'
              }`}
            >
              <span className="absolute left-4 top-8 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-bg bg-accent shadow-[0_0_0_6px_rgba(181,124,255,0.12)] md:left-1/2" />

              <motion.article
                className="w-full rounded-[1.75rem] border border-border bg-[linear-gradient(180deg,rgba(24,17,38,0.98),rgba(19,13,32,0.92))] p-6 shadow-ambient md:w-[calc(50%-2.5rem)]"
                initial={shouldReduceMotion ? false : { opacity: 0, x: isEven ? -24 : 24 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="h-14 w-14 overflow-hidden rounded-xl border border-border bg-bg-soft">
                      <img
                        src={item.logo}
                        alt={`${item.company} logo placeholder`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text">{item.company}</h3>
                      <p className="mt-2 text-sm font-medium text-accent-soft">{item.role}</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-soft">
                    {item.date}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-7 text-muted sm:text-base">
                  {item.summary}
                </p>
              </motion.article>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ExperienceTimeline
