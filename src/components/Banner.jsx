import React from 'react'
import { banner } from '../assets/images'

const Banner = () => {
  return (
    <section id='#banner' className=' flex items-center justify-around  mt-5  '>
        <div className=''>
            <p className=' font-bold text-5xl my-2'>Build your Library </p>
            <p className=' text-slate-800 font-semibold text-lg my-[0.5rem]'>Buy two selected books and get one for free</p>
            <button className=' bg-indigo-800 py-1 px-5 text-white rounded-[0.3rem] mt-[1rem]'>View All</button>
        </div>
       <div>
            <img src={banner} className={' w-[20rem] h-[20rem]'}/>
       </div>
    </section>
  )
}

export default Banner