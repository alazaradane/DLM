import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Admin from './Admins/Admin'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<SignUp/>}/>
      <Route path='/admin' element={<Admin/>}/>
    </Routes>
  )
}

export default App