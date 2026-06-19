import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'

export const ServerUrl = "http://localhost:8000"

const App = () => {

  useEffect (() => {
    const getCurrentUser = async () => {
      try {
        const response = await axios.getCurrentUser(`${ServerUrl}/api/user/current-user`,
           {withCredentials: true })
        const data = await response.data()
        console.log("Current User:", data)
      } catch (error) {
        console.error("Error fetching current user:", error)
      }
    }
    getCurrentUser()
  }, [])
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/auth' element={<Auth/>}/>
    </Routes>
  )
}

export default App