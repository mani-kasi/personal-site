import { motion, useReducedMotion } from 'framer-motion'
import type { AboutBlock } from '../data/siteContent'
import SectionHeading from './SectionHeading'

type AboutProps = {
  blocks: AboutBlock[]
  portraitImage: string
}

function About({ blocks, portraitImage }: AboutProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="about"
      className="scroll-mt-28 px-4 pb-20 pt-10 sm:px-6 sm:pb-24 sm:pt-12 lg:px-8 lg:pb-28 lg:pt-14"
    >
      <div className="mx-auto w-full max-w-6xl">
        <SectionHeading
          title="ABOUT"
        />

        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <motion.div
            className="relative mx-auto w-full max-w-[28rem] lg:mx-0"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <div className="relative aspect-[4/5]">
              <div className="absolute inset-0 rotate-[-2.8deg] overflow-hidden rounded-[1.1rem] border border-border/80 bg-bg-soft shadow-[0_22px_48px_rgba(0,0,0,0.38)]">
                <img
                  src={portraitImage}
                  alt="Portrait placeholder for Mani Kasi"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {blocks.map((block, index) => (
              <motion.article
                key={block.label}
                className="group rounded-[1.75rem] border border-border bg-[linear-gradient(180deg,rgba(24,17,38,0.96),rgba(19,13,32,0.92))] p-6 shadow-ambient transition duration-300 hover:-translate-y-1 hover:border-accent/35"
                initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent-soft">
                  {block.label}
                </p>
                <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                  {block.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
