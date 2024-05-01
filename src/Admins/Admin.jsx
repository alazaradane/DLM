import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Section from './Section'
import Students from './Students'
import Profile from './Profile'
import Sidebar from './Sidebar' 
import { Navigate } from 'react-router-dom'


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
      {loginSuccess && <Success title="Welcome" text="You have successfully logged in!" />}
        <Routes>
          <Route path='admin/dashboard' element={<Dashboard/>}/>
          <Route path='admin/students' element={<Students/>}/>
          <Route path='admin/section' element={<Section/>}/>
          <Route path='admin/profile' element={<Profile/>}/>
        </Routes>
        <div className=' flex items-center justify-center mb-5 bottom-0 ml-[30%] '>
          <p className=' mx-auto text-center font-serf '> &copy; 2024 LIA. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}

export default Admin
