import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <hr className="gradient-divider" />
        <Projects />
        <hr className="gradient-divider" />
        <Services />
        <hr className="gradient-divider" />
        <About />
        <hr className="gradient-divider" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
