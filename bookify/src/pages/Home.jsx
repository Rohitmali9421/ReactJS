import React from 'react'
import { useEffect ,useState } from 'react'
import { useFirebase } from '../context/Firebase'
import Bookcard from '../components/Bookcard';
function Home() {
    const firebase = useFirebase();
    const [books,setBooks]=useState([])
   useEffect(()=>{
    firebase.listAllBooks().then((books)=>setBooks(books.docs))
    
   })
  return (
    <>
    <div className='h-20'></div>
    <div className='flex gap-4 m-10'>
      {books.map((books, index) => (
                    <Bookcard key={index} {...books.data()}  />
                ))}
    </div>
    </>
  )
}

export default Home
