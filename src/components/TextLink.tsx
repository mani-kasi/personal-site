import type { ReactNode } from 'react'
import { isExternal } from '../lib/media'

type TextLinkProps = {
  href?: string
  children: ReactNode
  tone?: 'light' | 'dark'
  className?: string
}

function TextLink({ href, children, tone = 'light', className = '' }: TextLinkProps) {
  const base = 'inline-flex items-baseline gap-1.5 text-[0.9375rem] font-medium'
  const dark = tone === 'dark'

  if (!href) {
    return (
      <span
        className={`${base} cursor-not-allowed ${dark ? 'text-paper/70' : 'text-ink-soft'} ${className}`}
        title="Link coming soon"
      >
        {children}
        <span className="font-normal italic">(link pending)</span>
      </span>
    )
  }

  const external = isExternal(href)

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer noopener' : undefined}
      className={`group ${base} underline decoration-transparent decoration-2 underline-offset-[5px] transition-colors ${
        dark ? 'hover:decoration-paper' : 'hover:text-blue hover:decoration-blue'
      } ${className}`}
    >
      {children}
      {external ? (
        <>
          <span
            aria-hidden="true"
            className={`inline-block transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
              dark ? '' : 'text-blue'
            }`}
          >
            ↗
          </span>
          <span className="sr-only">(opens in a new tab)</span>
        </>
      ) : null}
    </a>
  )
}

export default TextLink
