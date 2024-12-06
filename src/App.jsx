import Home from './components/Home'
import Dashboard from './components/Dashboard'
import { BrowserRouter, Route , Routes} from 'react-router-dom'



function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
