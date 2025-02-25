import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Components/Signup'
import Login from './Components/Login'
import  { UserProvider } from './Context/UserContext'


function App() {

  return (
    <>
    <UserProvider>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path='/register' element={<Signup />}></Route>
            <Route path='/login' element={<Login />}></Route>
          </Routes>
      </BrowserRouter>

    </UserProvider>

    </>
  )
}

export default App

