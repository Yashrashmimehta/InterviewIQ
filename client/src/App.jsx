import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import axios from 'axios'
import { setUserData } from './redux/userSlice.js'

export const ServerUrl = "http://localhost:8000"

const App = () => {

  const dispatch = useDispatch()
  useEffect (() => {
    const getCurrentUser = async () => {
      try {
        const response = await axios.get(`${ServerUrl}/api/user/current-user`,
           {withCredentials: true })
        const data = response.data
        dispatch(setUserData(data))
      } catch (error) {
        console.error("Error fetching current user:", error)

      }
    }
    getCurrentUser()
  }, [dispatch])
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/auth' element={<Auth/>}/>
    </Routes>
  )
}

export default App
{/*
So what does App.jsx do?

When the app starts:

useEffect(() => {
   getCurrentUser()
}, [])

runs automatically.

Then:

GET /api/user/current-user

goes to the backend.
Backend checks the JWT cookie:

if(token is valid)
    return user;

and sends:

{
   name: "Yash",
   email: "yash@gmail.com"
}

back.

Then:
dispatch(setUserData(data))
restores Redux.
*/}
