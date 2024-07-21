import React ,{useState} from 'react'
import { useFirebase } from '../context/Firebase'
function ListingPage() {
    const firebase=useFirebase()
    const [name,setname]=useState("")
    const [isbnNo,setisbnNo]=useState("")
    const [price,setPrice]=useState("")
    const [coverpic,setcoverpic]=useState("")
    const handleSubmit= async(e)=>{
        e.preventDefault()
        await firebase.handleCreateNewListing(name,isbnNo,price,coverpic)

    }
  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
               
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Book Name</label>
                            <div className="mt-2">
                                <input id="name" name="name" type="text"  placeholder='Enter Book Name' value={name}
                                onChange={(e)=>setname(e.target.value)}
                                 required className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="isbn" className="block text-sm font-medium leading-6 text-gray-900">ISBN NO</label>
                            </div>

                            <div className="mt-2">
                                <input id="isbn" name="isbn" type="text" placeholder='Enter ISBN NO' value={isbnNo}
                                onChange={(e)=>setisbnNo(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Price </label>
                            </div>

                            <div className="mt-2">
                                <input id="price" name="price" type="text" placeholder='Enter Price' value={price}
                                onChange={(e)=>setPrice(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="coverpic" className="block text-sm font-medium leading-6 text-gray-900">coverpic </label>
                            </div>

                            <div className="mt-2">
                                <input id="coverpic" name="coverpic" type="file" 
                                onChange={(e)=>setcoverpic(e.target.files[0])} required className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button onClick={handleSubmit}   className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create</button>
                            
                        </div>
                    </form>
                </div>
            </div>
    </div>
  )
}

export default ListingPage
