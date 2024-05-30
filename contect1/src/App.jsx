import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
     <h1 className='font-bold'>Rohit</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
