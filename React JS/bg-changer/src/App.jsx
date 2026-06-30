import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [num,setNum]=useState(0)
  useEffect(()=>{
    console.log("hello", num)
  },[num])

  
  function changecolor(event){
    // const number=num
    setNum(num+1)
    const color = event.target.innerText;
    document.querySelector("body").style.backgroundColor=color;
  }

  return (
    <div className="btn-row">
    <button className="clrbtn" onClick={changecolor} style={{backgroundColor:"green", color:"white"}}>Green</button>
    <button className="clrbtn" onClick={changecolor} style={{backgroundColor:"red"}}>Red</button>
    <button className="clrbtn" onClick={changecolor} style={{backgroundColor:"yellow"}}>Yellow</button>
    <button className="clrbtn" onClick={changecolor} style={{backgroundColor:"black", color:"white"}}>Black</button>
    <button className="clrbtn" onClick={changecolor} style={{backgroundColor:"blue"}}>Blue</button>
    <button className="clrbtn" onClick={changecolor} style={{backgroundColor:"pink"}}>Pink</button>
    <button className="clrbtn" onClick={changecolor} style={{backgroundColor:"purple", color:"white"}}>Purple</button>
    <button className="clrbtn" onClick={changecolor} style={{backgroundColor:"Orange"}}>Orange</button>
    <button className="clrbtn" onClick={changecolor} style={{backgroundColor:"Brown", color:"white"}}>Brown</button>
    
    </div>
  )
}

export default App
