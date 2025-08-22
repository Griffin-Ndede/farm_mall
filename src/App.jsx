
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Login from './Components/Login'
import Signup from './Components/Signup'
import ActivitiesForm from './Pages/ActivitiesForm'
import CalendarView from './Pages/Calendar'
import UserProfile from './Pages/UserProfile'
import Practice from './Pages/Practice'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserProvider } from './Context/UserContext'

function App() {

  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path='/register' element={<Signup />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="activities" element={<ActivitiesForm />} />
              <Route path="calendar" element={<CalendarView />} />
              <Route path='userprofile' element={<UserProfile />} />
              <Route path='practice' element={<Practice />} />
              {/* Default nested route */}
              <Route index element={<ActivitiesForm />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider >

    </>
  )
}

export default App

