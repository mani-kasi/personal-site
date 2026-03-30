import { motion, useReducedMotion } from 'framer-motion'
import { FaJava } from 'react-icons/fa6'
import type { IconType } from 'react-icons'
import {
  SiCplusplus,
  SiCss,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTypescript,
} from 'react-icons/si'
import type { TechStackItem } from '../data/siteContent'

type TechStackProps = {
  skills: TechStackItem[]
}

const iconMap: Record<string, IconType> = {
  cplusplus: SiCplusplus,
  css3: SiCss,
  html5: SiHtml5,
  java: FaJava,
  javascript: SiJavascript,
  mongodb: SiMongodb,
  nodedotjs: SiNodedotjs,
  python: SiPython,
  react: SiReact,
  typescript: SiTypescript,
}

function TechStack({ skills }: TechStackProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {skills.map((skill, index) => {
        const Icon = iconMap[skill.icon]

        return (
          <motion.span
            key={skill.label}
            className="inline-flex min-w-0 items-center justify-center gap-2 rounded-xl border border-border bg-bg-soft px-4 py-2 text-sm font-medium text-text transition hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent-soft"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.35, delay: index * 0.04, ease: 'easeOut' }}
          >
            {Icon ? <Icon className="text-base text-accent-soft" /> : null}
            {skill.label}
          </motion.span>
        )
      })}
    </div>
  )
}

export default TechStack
