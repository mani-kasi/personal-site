import type { HeroContent } from '../data/siteContent'
import { isExternal } from '../lib/media'
import AssetImage from './AssetImage'

type HeroProps = {
  hero: HeroContent
}

/**
 * Compact intro: name and tagline lead on the left, the portrait sits beside them on a
 * soft-blue offset block, and the supporting copy and links follow underneath.
 */
function Hero({ hero }: HeroProps) {
  const [greeting, name] = hero.headline
  const duotone = hero.portrait.treatment === 'duotone'
  const [tagStart, tagHighlight] = ['I like turning ideas into', 'things people can use.']

  return (
    <section id="about" aria-labelledby="hero-title" className="scroll-mt-14">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-12 gap-x-6 gap-y-10 px-5 pb-14 pt-10 sm:px-8 lg:gap-x-10 lg:gap-y-8 lg:px-12 lg:pb-20 lg:pt-16">
        <div className="col-span-12 lg:col-span-7 lg:row-start-1">
          <p className="mb-5 text-sm text-ink-soft">{hero.eyebrow}</p>
          <h1 id="hero-title" className="font-display font-bold tracking-[-0.045em]">
            <span className="block text-2xl leading-none text-ink-soft sm:text-3xl">{greeting}</span>
            <span className="mt-2 block text-[clamp(3.25rem,9vw,6.25rem)] leading-[0.95]">
              {name}
              <span className="text-blue">.</span>
            </span>
          </h1>
          <p className="mt-6 max-w-[22ch] font-display text-[clamp(1.5rem,2.8vw,2.125rem)] font-semibold leading-[1.2] tracking-[-0.025em] sm:max-w-[26ch]">
            {tagStart}{' '}
            <span className="box-decoration-clone bg-soft px-1.5 [-webkit-box-decoration-break:clone]">
              {tagHighlight}
            </span>
          </p>
        </div>

        <aside
          aria-label="Portrait"
          className="col-span-8 col-start-1 sm:col-span-5 lg:col-span-4 lg:col-start-9 lg:row-span-2 lg:row-start-1 lg:self-start"
        >
          <figure className="relative pb-3 pl-3 lg:pb-4 lg:pl-4">
            <span aria-hidden="true" className="absolute bottom-0 left-0 right-4 top-4 bg-blue lg:right-5 lg:top-5" />
            <div className="relative isolate aspect-[4/5] overflow-hidden bg-soft">
              <AssetImage
                src={hero.portrait.src}
                alt={hero.portrait.alt}
                hint={hero.portrait.hint}
                eager
                className={duotone ? 'mix-blend-multiply grayscale contrast-125' : ''}
              />
            </div>
          </figure>
        </aside>

        <div className="col-span-12 lg:col-span-7 lg:row-start-2">
          <div className="max-w-[36rem] space-y-4 text-base leading-relaxed text-ink/85 sm:text-[1.0625rem]">
            {hero.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul className="mt-6 divide-y divide-ink/15 border-y border-ink/15 text-sm sm:max-w-[28rem]">
            {hero.affiliations.map((item) => (
              <li key={item.org} className="flex items-baseline justify-between gap-4 py-2.5">
                <span className="font-medium">{item.role}</span>
                <span className="text-ink-soft">{item.org}</span>
              </li>
            ))}
          </ul>

          <ul className="mt-8 flex flex-wrap gap-3">
            {hero.links.map((link) => {
              const external = isExternal(link.href)
              const opensNewTab = external || link.href.startsWith('/')
              const primary = link.label === 'Resume'

              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={opensNewTab ? '_blank' : undefined}
                    rel={opensNewTab ? 'noreferrer noopener' : undefined}
                    className={`inline-flex items-center gap-1.5 border px-4 py-2.5 text-[0.9375rem] font-medium transition-colors ${
                      primary
                        ? 'border-blue bg-blue text-paper hover:border-ink hover:bg-ink'
                        : 'border-ink/30 hover:border-ink hover:bg-ink hover:text-paper'
                    }`}
                  >
                    {link.label}
                    {opensNewTab ? (
                      <>
                        <span aria-hidden="true">↗</span>
                        <span className="sr-only">(opens in a new tab)</span>
                      </>
                    ) : null}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Hero
