import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,setcounter]=useState(15)
let addval=()=>{
  setcounter(counter+1)
  
}
let removeval=()=>{
  if(counter>0){
  setcounter(counter-1)
  }
}
  return (
    <>
     <h1 className="bg-black p-4 rounded-md "> Rohit Mali</h1>
     <h2>Counter value : {counter}</h2>
     <button className="m-6 " onClick={addval}>Add Value</button>
     <br/>
     <button onClick={removeval}>Remove value</button>
    </>
  )
}

export default App
