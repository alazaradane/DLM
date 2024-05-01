import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../assets/images'
import { dashboardIcon, profile, section, student, logout} from '../assets/images'



const Sidebar = () => {
  return (
    <div className=' bg-sidebar text-white text-center p-3 flex flex-1 flex-col h-screen '>
      <div className=' flex flex-1 flex-col'>
        <div className=' flex items-center mx-auto '>
          <Logo/>
        </div>
        <div className=' flex items-start mt-5 flex-col gap-8  w-full ml-3'>
          <div className=' w-full  '>
            <Link to={'/admin/dashboard'} className='flex items-center gap-3  '>
                <img src={dashboardIcon} width={30} height={30}/>
                <span>Dashboard</span>
            </Link>
          </div>
          <div className=' w-full  '>
            <Link to={'/admin/students'} className='flex items-center gap-3  '>
                <img src={student} width={30} height={30}/>
                <span>Student</span>
            </Link>
          </div>
          <div className=' w-full '>
            <Link to={'/admin/section'} className='flex items-center gap-3  '>
                <img src={section} width={30} height={30}/>
                <span>Section</span>
            </Link>
          </div>
          <div className=' w-full   '>
            <Link to={'/admin/profile'} className='flex items-center gap-3  '>
                <img src={profile} width={30} height={30}/>
                <span>Profile</span>
            </Link>
          </div>
        </div>
      </div>
      <div >
        <Link to={'/'} className=' flex justify-start ml-5 mb-5 items-center gap-3'>
          <img src={logout} width={30} height={30}/>
          <span className=' hover:text-red-500'>Logout</span>
        </Link>
      </div>               
    </div>
)
}

export default Sidebar