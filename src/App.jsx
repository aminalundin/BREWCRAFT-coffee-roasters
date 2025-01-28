import { useState } from 'react'
import './App.css'
import logo from './images/big-logo.png'
import Footer from './components/Footer'
import Hero from './components/Hero'
import ProdOne from './components/ProdOne'
import ProdTwo from './components/ProdTwo'
import ProdThree from './components/ProdThree'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <ProdOne />
      <ProdTwo />
      <ProdThree />
      <Footer />
    </>
  )
}

export default App
