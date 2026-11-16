import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import OffTheClock from './components/OffTheClock'
import Projects from './components/Projects'
import { siteContent } from './data/siteContent'
import { useActiveSection } from './hooks/useActiveSection'

const sectionIds = siteContent.navItems.map((item) => item.id)

function App() {
  const activeSection = useActiveSection(sectionIds)

  return (
    <div id="top" className="min-h-screen overflow-x-clip bg-paper text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-paper"
      >
        Skip to content
      </a>

      <Navbar navItems={siteContent.navItems} activeSection={activeSection} resumeHref={siteContent.resumeHref} />

      <main id="main" tabIndex={-1} className="outline-none">
        <Hero hero={siteContent.hero} />
        <Experience experiences={siteContent.experienceItems} technologiesLine={siteContent.technologiesLine} />
        <Projects projects={siteContent.projectItems} />
        <OffTheClock content={siteContent.offTheClock} />
        <Contact contact={siteContent.contact} />
      </main>

      <Footer />
    </div>
  )
}

export default App
