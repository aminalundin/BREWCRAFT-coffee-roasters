import { useState } from 'react'
import './App.css'
import logo from './images/big-logo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">

      <main>
    <div className="logo"><img src={logo} alt="logo-type" /></div>
      </main>

      <aside>

      </aside>

      </div>
    </>
  )
}

export default App
