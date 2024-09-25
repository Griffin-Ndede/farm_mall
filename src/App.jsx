import React from 'react'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import { BrowserRouter, Route , Routes} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import FarmDetailsForm from './components/FarmDetailsForm'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path= "/dashboard" element={<Dashboard/>}></Route>
      <Route path="/farmdetailsform" element={<FarmDetailsForm/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
