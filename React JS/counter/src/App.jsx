import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [count,setcount]=useState(0)
  function addnum(){
    if(count>=50){
      setcount(0)
      return
    }
    setcount(++count)
  }
  function removenum(){
    if(count<=0){
      setcount(0)
      return
    }
    setcount(--count)
  }

  const pct = count / 50
  const radius = 90
  const circumference = 2 * Math.PI * radius

  return (
    <div className="counter-page">
      <div className="counter-card">
        <p className="counter-eyebrow">range 1–50</p>
        <h1 className="counter-title">Counter</h1>

        <div className="counter-dial">
          <svg viewBox="0 0 220 220" className="counter-ring">
            <circle
              className="counter-ring-track"
              cx="110"
              cy="110"
              r={radius}
            />
            <circle
              className="counter-ring-fill"
              cx="110"
              cy="110"
              r={radius}
              style={{
                strokeDasharray: circumference,
                strokeDashoffset: circumference * (1 - pct),
              }}
            />
          </svg>
          <div className="counter-readout">
            <span className="counter-value">{count}</span>
            <span className="counter-max">/ 50</span>
          </div>
        </div>

        <div className="counter-controls">
          <button
            className="counter-btn counter-btn--minus"
            onClick={removenum}
            aria-label="Decrement"
          >
            <span aria-hidden="true">−</span>
          </button>
          <button
            className="counter-btn counter-btn--plus"
            onClick={addnum}
            aria-label="Increment"
          >
            <span aria-hidden="true">+</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App