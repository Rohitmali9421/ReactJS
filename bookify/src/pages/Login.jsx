import React,{useState,useEffect } from 'react'
import { useFirebase } from '../context/Firebase'
import { useNavigate } from 'react-router-dom'
function Login() {
    const firebase=useFirebase()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const Navigate=useNavigate()
    console.log(firebase)
    const handleSubmit=async(e)=>{
        e.preventDefault();
        await firebase.signInWithEmailAndPass(email,password)
    }
    useEffect(()=>{
        if(firebase.isLogedIn){
            Navigate("/")
        }
    },[firebase,Navigate])
    return (
        <div>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2" >
                                <input id="email"  name="email" type="email" autoComplete ="email" placeholder='Enter Email' value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                 required className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            </div>

                            <div className="mt-2">
                                <input id="password" name="password" type="password" placeholder='Enter Password' value={password}
                                onChange={(e)=>setPassword(e.target.value)} autoComplete ="current-password" required className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button onClick={handleSubmit}  type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
                           
                            <button onClick={firebase.signInWithgogle}   className="flex w-full  mt-4 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in with Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
