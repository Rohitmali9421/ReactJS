import React from "react"
import {getFirestore,collection,doc, addDoc }from "firebase/firestore"
import { app } from "./firestore"

const firestore=getFirestore(app)
function App() {
  const writedata= async()=>{
    const result =await addDoc(collection(firestore,"cities"),{
      name :"sangli",
      pincode:1234
    })
    console.log(result)
  }

  return (
    
    <>
     <h1>rohit</h1>
     <button onClick={writedata}>Put data</button>
      
    </>
  )
}

export default App
