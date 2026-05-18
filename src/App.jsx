import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import CoCurricular from './components/CoCurricular'
import Interests from './components/Interests'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'


function App() {
  return (
    <div className="font-body bg-white min-h-screen text-navy overflow-x-hidden selection:bg-accent/30 selection:text-navy scroll-smooth">
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Certifications />
      <CoCurricular />
      <Interests />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
