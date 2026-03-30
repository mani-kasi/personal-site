import { motion, useReducedMotion } from 'framer-motion'
import { Mail } from 'lucide-react'

type ContactProps = {
  contact: {
    heading: string
    description: string
    primaryCta: {
      label: string
      href: string
    }
  }
}

function Contact({ contact }: ContactProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="contact"
      className="scroll-mt-28 px-4 pb-8 pt-12 sm:px-6 sm:pb-10 sm:pt-14 lg:px-8 lg:pb-12 lg:pt-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          className="flex flex-col gap-6"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <div className="flex w-full items-center gap-4">
              <span className="h-px flex-1 bg-accent/35" />
              <h2 className="font-heading text-[clamp(2.5rem,5vw,4.25rem)] uppercase tracking-[0.04em] text-text">
                {contact.heading}
              </h2>
              <span className="h-px flex-1 bg-accent/35" />
            </div>
            <p className="mt-4 text-base leading-8 text-muted sm:text-lg">
              {contact.description}
            </p>
            <a
              href={contact.primaryCta.href}
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-accent/30 bg-accent px-6 py-3 text-sm font-semibold text-bg transition duration-300 hover:-translate-y-1 hover:bg-accent-soft"
            >
              <Mail size={17} />
              <span>{contact.primaryCta.label}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
