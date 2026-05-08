import Navbar from './components/navbar'
import Hero from './components/hero'
import Projects from './components/projects'
import Skills from './components/skills'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div id="hero"><Hero /></div>
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App