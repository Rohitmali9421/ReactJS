import { useState } from 'react'


function App() {
  const [color, setcolor] = useState("black")

  return (
    <>
    <div className="bg-green-400 w-full h-12 font-bold flex items-center justify-center ">
      <h1 >Background changer</h1>
      </div>
      <div className='body w-full h-[92vh] bg-black flex' style={{background :color}}>

      <div className="m-auto rounded-3xl 
       text-black font-bold p-3 bg-white ">
        <button onClick={()=>setcolor("red")} className="px-4 py-1 rounded-3xl mx-2 " style={{background :"red"}}>Red</button>
        <button onClick={()=>setcolor("blue")} className="px-4 py-1 rounded-3xl mx-2 " style={{background :"blue"}}>blue</button>
        <button onClick={()=>setcolor("green")} className="px-4 py-1 rounded-3xl mx-2 " style={{background :"green"}}>Green</button>
        <button onClick={()=>setcolor("yellow")} className="px-4 py-1 rounded-3xl mx-2 " style={{background :"yellow"}}>Yellow</button>
        <button onClick={()=>setcolor("grey")} className="px-4 py-1 rounded-3xl mx-2 " style={{background :"grey"}}>Grey</button>
        <button onClick={()=>setcolor("pink")} className="px-4 py-1 rounded-3xl mx-2 " style={{background :"pink"}}>Pink</button>
      </div>
      </div>
    </>
  )
}

export default App
