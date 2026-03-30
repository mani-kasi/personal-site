import { useEffect, useState } from 'react'
import { FileText, Menu, X } from 'lucide-react'
import type { NavItem } from '../data/siteContent'

type NavbarProps = {
  activeSection: string
  isScrolled: boolean
  navItems: NavItem[]
  resumeHref: string
}

function Navbar({
  activeSection,
  isScrolled,
  navItems,
  resumeHref,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const closeMenu = () => setIsOpen(false)

    window.addEventListener('resize', closeMenu)
    return () => window.removeEventListener('resize', closeMenu)
  }, [])

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav
        aria-label="Primary"
        className={`mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition duration-300 sm:px-5 ${
          isScrolled
            ? 'border-border bg-bg/75 shadow-ambient backdrop-blur-xl'
            : 'border-border/50 bg-bg/55 backdrop-blur-md'
        }`}
      >
        <a
          href={resumeHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/80 px-4 py-2 text-sm font-medium text-text transition hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent/10 hover:text-accent-soft"
          aria-label="Open resume PDF in a new tab"
        >
          <FileText size={16} />
          <span>Resume</span>
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? 'page' : undefined}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-accent text-bg'
                    : 'text-muted hover:bg-card/90 hover:text-text'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card/80 text-text transition hover:border-accent/50 hover:text-accent-soft md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <div
        id="mobile-nav"
        className={`mx-auto mt-3 w-full max-w-6xl overflow-hidden rounded-2xl border border-border bg-bg/90 shadow-ambient backdrop-blur-xl transition md:hidden ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 border-transparent opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 p-3">
          {navItems.map((item) => {
            const isActive = activeSection === item.id

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                aria-current={isActive ? 'page' : undefined}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? 'bg-accent text-bg'
                    : 'text-muted hover:bg-card hover:text-text'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </div>
      </div>
    </header>
  )
}

export default Navbar
