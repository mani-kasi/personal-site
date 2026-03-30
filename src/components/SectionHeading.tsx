import { motion, useReducedMotion } from 'framer-motion'

type SectionHeadingProps = {
  title: string
  subtitle?: string
}

function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className="mb-10 flex flex-col gap-4 md:mb-12"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <div className="flex items-center gap-4">
        <span className="h-px flex-1 bg-accent/35" />
        <h2 className="font-heading text-[clamp(2rem,4vw,3.75rem)] uppercase tracking-[0.08em] text-text">
          {title}
        </h2>
        <span className="h-px flex-1 bg-accent/35" />
      </div>
      {subtitle ? (
        <p className="mx-auto max-w-2xl text-center text-sm leading-7 text-muted sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  )
}

export default SectionHeading
