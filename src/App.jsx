import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Admin from './Admins/Admin'
import Books from './pages/Books'
import BookDetail from './components/BookDetail'
import { useState } from 'react'
import CheckOut from './components/CheckOut'
const App = () => {

  const [userData, setUserData] = useState({});


    const handleLoginSuccess = (userData) => {
        setUserData(userData);
        }

    
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login onLoginSuccess={handleLoginSuccess} />} />
      <Route path='/register' element={<SignUp/>}/>
      <Route path='/admin/*' element={<Admin/>}/>
      <Route path='/books' element={<Books userName={userData.name} userEmail={userData.email}/>}/>
      <Route path="/books/:bookId" element={<BookDetail />} />
      <Route path='/checkout' element={<CheckOut/>}/>
    </Routes>
  )
}

export default App