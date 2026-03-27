import { useState } from 'react'
import onBulb from './assets/on.jpg'
import offBulb from './assets/off.jpg'
import './App.css'

function App() {
  const [isOn, setIsOn] = useState(false)

  function handleClick() {
    setIsOn(!isOn)
  }

  return (
    <div className="container">
      <h1>Light Bulb</h1>

      <img
        src={isOn ? onBulb : offBulb}
        alt={isOn ? 'Bulb is on' : 'Bulb is off'}
        className="bulb-image"
      />

      <p>Status: Bulb is {isOn ? 'ON' : 'OFF'}</p>

      <button onClick={handleClick}>
        {isOn ? 'Turn OFF' : 'Turn ON'}
      </button>
    </div>
  )
}

export default App
