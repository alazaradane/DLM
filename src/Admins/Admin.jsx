import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Section from './Section'
import Students from './Students'
import Profile from './Profile'
import Sidebar from './Sidebar' 
import { Navigate } from 'react-router-dom'
import Success from '../components/Success'


const Admin = () => {
  const loginSuccess = true;

  if(!loginSuccess) {
    return <Navigate to='/'/>
  }

  return (
    <section className=' flex w-full'>
      <div className=' w-[20%] h-screen'>
        <Sidebar/>
      </div>
      <div className=' w-[80%] bg-slate-50'>
      {/* {loginSuccess && <Success title="Welcome" text="You have successfully logged in!" />} */}
        <Routes>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='students' element={<Students/>}/>
          <Route path='section' element={<Section/>}/>
          <Route path='profile' element={<Profile/>}/>
        </Routes>
      </div>
    </section>
  )
}

export default Admin
