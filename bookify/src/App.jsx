import ListingPage from "./pages/ListingPage"
import {Routes,Route} from "react-router-dom"
import RegisterPage from "./pages/RegisterPage"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
function App() {
  

  return (
    <div>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Register' element={<RegisterPage/>}/>
      <Route path='/book/List' element={<ListingPage/>}/>
     
          
    </Routes>
    </div>
  )
}

export default App
