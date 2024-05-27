import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const increase =()=>{
    setCount(count+1)
  }
  const decrease =()=>{
    setCount(count-1)
  }
  return (
    <>
     <h1>count = {count}</h1>
     <button onClick={increase}>Increase value</button>
     <br />
     <button onClick={decrease}>decrease value</button>
    </>
  )
}

export default App
