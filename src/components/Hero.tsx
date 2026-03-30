import { motion, useReducedMotion } from 'framer-motion'
import TypingText from './TypingText'
import type { SocialLink } from '../data/siteContent'

type HeroProps = {
  hero: {
    greeting: string
    name: string
    typingPhrases: string[]
    profileImage: string
    email: string
    socialLinks: SocialLink[]
  }
}

function Hero({ hero }: HeroProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-8 pt-8 sm:px-6 sm:pb-10 sm:pt-9 lg:px-8 lg:pt-12 lg:pb-12"
    >
      <div className="mx-auto grid min-h-[calc(100vh-8rem)] w-full max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(360px,0.9fr)]">
        <motion.div
          className="relative z-10"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="space-y-3">
            <p className="text-[clamp(1.75rem,3.2vw,2.55rem)] font-medium text-accent-soft">
              {hero.greeting}
            </p>
            <h1 className="hero-name-shift whitespace-nowrap font-heading text-[clamp(2.7rem,6.4vw,5.2rem)] leading-[0.96] tracking-[0.02em]">
              {hero.name}
            </h1>
          </div>

          <div className="mt-6">
            <TypingText phrases={hero.typingPhrases} />
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {hero.socialLinks.map((link) => {
              const isEmail = link.href.startsWith('mailto:')

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={isEmail ? undefined : '_blank'}
                  rel={isEmail ? undefined : 'noreferrer'}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card/75 px-5 py-3 text-sm font-medium text-text transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-accent/10 hover:text-accent-soft"
                  aria-label={`Open ${link.label}`}
                >
                  <span>{link.label}</span>
                </a>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto flex w-full max-w-xl justify-center lg:justify-end"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 20 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1, ease: 'easeOut' }}
        >
          <div className="relative w-full max-w-[26rem]">
            <div className="absolute inset-x-8 inset-y-10 rounded-full bg-accent/12 blur-3xl" />
            <motion.div
              className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/80 bg-bg-soft shadow-[0_28px_60px_rgba(0,0,0,0.45)]"
              animate={shouldReduceMotion ? undefined : { y: [0, -6, 0], rotate: [-1.2, 0, -1.2] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src={hero.profileImage}
                alt="Portrait of Mani Kasi"
                className="h-full w-full object-cover object-center"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <a
        href={`mailto:${hero.email}`}
        className="fixed right-5 top-1/2 hidden -translate-y-1/2 text-xs font-medium tracking-[0.32em] text-muted transition hover:text-accent-soft xl:block"
        style={{ writingMode: 'vertical-rl' }}
      >
        {hero.email}
      </a>
    </section>
  )
}

export default Hero
