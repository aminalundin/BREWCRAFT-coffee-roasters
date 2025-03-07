import { useState } from 'react'
import './App.css'
import logo from './images/big-logo.png'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Header from './components/Header'
import Shop from './components/Shop'
import About from './components/About'

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <>

      <Header setActiveSection={setActiveSection} />

      {activeSection === "home" && <Hero />}
      {activeSection === "shop" && <Shop />}
      {activeSection === "about" && <About />}

      <Footer />

    </>
  )
}

export default App
