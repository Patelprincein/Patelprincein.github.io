import CursorGlow from './components/animations/CursorGlow'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import FloatingNav from './components/layout/FloatingNav'
import JsonLd from './components/shared/JsonLd'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Learning from './sections/Learning'
import Github from './sections/Github'
import Blog from './sections/Blog'
import Experience from './sections/Experience'
import Contact from './sections/Contact'

const App = () => {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <CursorGlow />
      <JsonLd />
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Learning />
        <Github />
        <Blog />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <FloatingNav />
    </div>
  )
}

export default App
