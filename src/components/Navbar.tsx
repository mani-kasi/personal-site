import { useEffect, useState } from 'react'
import type { NavItem } from '../data/siteContent'

type NavbarProps = {
  navItems: NavItem[]
  activeSection: string
  resumeHref: string
}

function Navbar({ navItems, activeSection, resumeHref }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return undefined

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-ink/15 bg-paper">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 w-full max-w-[1200px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12"
      >
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-[-0.03em]"
          onClick={() => setIsOpen(false)}
        >
          Mani Kasi
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id

            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={`border-b-2 py-1 text-sm font-medium transition-colors hover:text-ink ${
                    isActive ? 'border-blue text-ink' : 'border-transparent text-ink-soft'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={resumeHref}
            target="_blank"
            rel="noreferrer noopener"
            className="group hidden items-baseline gap-1.5 bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-blue lg:inline-flex"
          >
            Resume
            <span aria-hidden="true">↗</span>
            <span className="sr-only">(opens in a new tab)</span>
          </a>

          <button
            type="button"
            className="bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-blue lg:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      <div id="mobile-nav" hidden={!isOpen} className="border-t border-ink/15 bg-paper lg:hidden">
        <ul className="mx-auto w-full max-w-[1200px] px-5 pb-3 sm:px-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.id

            return (
              <li key={item.id} className="border-b border-ink/15">
                <a
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? 'location' : undefined}
                  className={`block py-3 font-display text-2xl font-semibold tracking-[-0.025em] ${
                    isActive ? 'text-blue' : ''
                  }`}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
          <li>
            <a
              href={resumeHref}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => setIsOpen(false)}
              className="flex items-baseline justify-between py-3.5 text-base font-medium"
            >
              <span>
                Resume<span className="sr-only"> (opens in a new tab)</span>
              </span>
              <span aria-hidden="true">↗</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
