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
          <div className="info-text">
            <p>At BrewCraft, we believe coffee is more than a morning ritual—it’s an art form.
              As an independent coffee roaster, we carefully source the finest beans from around the globe,
              celebrating the unique stories and flavors each region has to offer. Every batch is roasted with precision and passion,
              ensuring every cup is a journey of bold taste and exceptional quality.
              Whether you’re a seasoned coffee enthusiast or just starting your craft coffee adventure,
              BrewCraft is here to awaken your senses, one perfect brew at a time. Welcome to the art of coffee.</p>
          </div>

          <div className="shop-button">
            <p>SHOP OUR BEANS</p>
          </div>
        </aside>

      </div>
    </>
  )
}

export default App
