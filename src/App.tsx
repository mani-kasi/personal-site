import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { FaLinkedinIn } from 'react-icons/fa6'
import { SiGithub } from 'react-icons/si'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import { siteContent } from './data/siteContent'

const trackedSections = siteContent.navItems.map((item) => item.id)
const footerIconMap = {
  GitHub: SiGithub,
  LinkedIn: FaLinkedinIn,
}

function App() {
  const [activeSection, setActiveSection] = useState(siteContent.navItems[0]?.id ?? '')
  const [isScrolled, setIsScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16)
      setShowScrollTop(window.scrollY > 480)

      const currentScroll = window.scrollY + 160
      let nextActiveSection = trackedSections[0] ?? ''

      trackedSections.forEach((sectionId) => {
        const section = document.getElementById(sectionId)

        if (!section) {
          return
        }

        if (section.offsetTop <= currentScroll) {
          nextActiveSection = sectionId
        }
      })

      setActiveSection(nextActiveSection)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="relative min-h-screen overflow-x-clip bg-bg text-text">
      <Navbar
        activeSection={activeSection}
        isScrolled={isScrolled}
        navItems={siteContent.navItems}
        resumeHref={siteContent.resumeHref}
      />

      <main className="relative">
        <Hero hero={siteContent.hero} />
        <About
          blocks={siteContent.aboutBlocks}
          portraitImage={siteContent.aboutPortraitImage}
        />
        <Experience
          experiences={siteContent.experienceItems}
          skills={siteContent.techStack}
        />
        <Projects projects={siteContent.projectItems} />
        <Contact contact={siteContent.contact} />
      </main>

      <footer className="flex justify-start px-4 pb-6 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          {siteContent.contact.socialLinks.map((link) => {
            const Icon = footerIconMap[link.label as keyof typeof footerIconMap]

            if (!Icon) {
              return null
            }

            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-bg-soft text-muted transition hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent-soft"
                aria-label={`Open ${link.label}`}
              >
                <Icon className="text-lg" />
              </a>
            )
          })}
        </div>
      </footer>

      {showScrollTop ? (
        <button
          type="button"
          onClick={handleScrollToTop}
          className="fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-bg/88 text-muted shadow-ambient backdrop-blur-md transition hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent-soft"
          aria-label="Scroll back to top"
        >
          <ArrowUp size={18} />
        </button>
      ) : null}
    </div>
  )
}

export default App
