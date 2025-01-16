import Home from './components/Home'
import Dashboard from './components/Dashboard'
import { BrowserRouter, Route , Routes} from 'react-router-dom'
import Signup from './components/Signup'



function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path='/register' element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
