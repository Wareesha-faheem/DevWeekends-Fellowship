import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length,setlength]=useState(7)
  const [password,setpass]=useState("")
  const [charall, setcharall]=useState(false)
  const [numall, setnumall]=useState(false)

  const passgen=useCallback(()=>{
    console.log("Hello World")
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(charall) str+="~!@#$%^&*()_+{}|:<>?-=[];',./"
    if(numall) str+="0123456789"
    let pass="";
    for (let i = 0; i < length; i++) {
      pass+=str[Math.floor(Math.random()*str.length)]
    }
    setpass(pass)
  },[length, charall,numall,setpass])

  // useEffect(()=>{
  //   passgen()
  // }, [passgen])

  const passref=useRef(null)
  const copytoclip=()=>{
    passgen()
    // passref.current?.select()
    // window.navigator.clipboard.writeText(password)
  }
  return (
    <>
    <input type="text" value={password} readOnly ref={passref}/>
    <button id='btncopy' onClick={copytoclip}>Copy</button>
    <br />
    <input type="range" max={30} min={7} value={length} onChange={(e)=>{
      setlength(Number(e.target.value))
    }}/>
    <label>length: {length}</label>

    <input type="checkbox" id='numcheck' defaultChecked={numall} onChange={()=>{
      setnumall(prev=>!prev)
    }}/>
    <label>Number</label>

    <input type="checkbox" id='charcheck' defaultChecked={charall} onChange={()=>{
      setcharall(prev=>!prev)
    }}/>
    <label>Special Characters</label>
    {/* <h1>{password}</h1> */}
    </>
    
  )
}

export default App
