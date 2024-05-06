import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Admin from './Admins/Admin'
import Books from './pages/Books'
import BookDetail from './components/BookDetail'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<SignUp/>}/>
      <Route path='/admin/*' element={<Admin/>}/>
      <Route path='/books' element={<Books/>}/>
      <Route path="/books/:bookId" element={<BookDetail />} />
    </Routes>
  )
}

export default App