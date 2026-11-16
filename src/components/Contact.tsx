import type { ContactContent } from '../data/siteContent'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import TextLink from './TextLink'

type ContactProps = {
  contact: ContactContent
}

function Contact({ contact }: ContactProps) {
  return (
    <section id="contact" aria-labelledby="contact-title" data-tone="dark" className="scroll-mt-14 bg-blue text-paper">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <SectionHeading id="contact-title" title="Contact" tone="blue" />

        <Reveal>
          <p className="max-w-[20ch] font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.035em] text-balance">
            {contact.headline}
          </p>
        </Reveal>

        <Reveal className="mt-8 grid grid-cols-12 gap-x-6 gap-y-6 lg:mt-10 lg:gap-x-10">
          <p className="col-span-12 max-w-[26rem] text-base leading-relaxed text-paper/95 lg:col-span-5">
            {contact.description}
          </p>

          <div className="col-span-12 lg:col-span-7">
            <a
              href={`mailto:${contact.email}`}
              className="inline-block break-words font-display text-[clamp(1.25rem,2.6vw,2rem)] font-semibold tracking-[-0.025em] underline decoration-paper/50 decoration-1 underline-offset-[6px] transition-colors hover:decoration-paper hover:decoration-2"
            >
              {contact.email}
            </a>

            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
              {contact.socialLinks.map((link) => (
                <li key={link.label}>
                  <TextLink href={link.href} tone="dark">
                    {link.label}
                  </TextLink>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
