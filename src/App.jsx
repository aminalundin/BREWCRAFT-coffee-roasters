import { useState } from 'react'
import './App.css'
import logo from './images/big-logo.png'
import Footer from './components/Footer'
import Hero from './components/Hero'
import ProdOne from './components/ProdOne'
import ProdTwo from './components/ProdTwo'
import ProdThree from './components/ProdThree'
import Header from './components/Header'

function App() {
  const [isShopOpen, setIsShopOpen] = useState(false)

  return (
    <>
      <Header setIsShopOpen={setIsShopOpen}/>
      <Hero />
      {/* <ProdOne />
      <ProdTwo />
      <ProdThree /> */}
      <Footer />
    </>
  )
}

export default App
