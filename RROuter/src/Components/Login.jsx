import React, {useState , useContext} from 'react'
import UserContext from '../contex/UserContext'
function Login() {
    const [username , setUsename]=useState("")
    const [password , sePassword]=useState("")
    const {setUser}=useContext(UserContext)

    const handleSubmit =(e)=>{
       e.preventDefault()
       setUser({ username , password})
    }
  return (
    <div>
      <h2>Login</h2>

      <input type="text" 
      value={username}
      onChange={(e)=>{
        setUsename(e.target.value)
      }}
      placeholder='Username' />

      <input type="text"  value={password}
      onChange={(e)=>{
        sePassword(e.target.value)
      }} placeholder='Password' />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
