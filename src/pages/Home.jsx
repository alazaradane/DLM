import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className=' flex flex-col gap-6 items-center justify-center text-4xl text-indigo-700 m-auto'>
        <p>Home</p>
        <div>
        <Link to={'/login'}>
            Login
        </Link>
        </div>
        
    </div>
  )
}

export default Home