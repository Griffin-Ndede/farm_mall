import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import { BrowserRouter, Route , Routes} from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path='/register' element={<Signup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
