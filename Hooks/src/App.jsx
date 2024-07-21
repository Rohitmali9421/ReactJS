import { useState } from 'react'

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
    < >
     <h1 className="font-bold">Rohit mali</h1>
     <h1>counter = {counter}</h1>
     <button onClick={addval} id='add'>Increse</button>
     <button onClick={removeval} id='remove'>drecrese</button>
     
    </>
  )
}

export default App
