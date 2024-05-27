import { useState } from 'react'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="font-bold text-blue-800 text-2xl">hello World</h1>
      <Card name ="rohit"/>
      <Card name ="Ram"/>
    </>
  )
}

export default App
