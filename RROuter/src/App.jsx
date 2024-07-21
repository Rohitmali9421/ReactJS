import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './contex/UserContextProvider'

function App() {
  return (
   
    <UserContextProvider>
    <h1>Rohit Mali</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
        
   
  )
}

export default App
