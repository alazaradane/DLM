import React from 'react'
import { student } from '../assets/images'


const Card = ({src, title, value}) => {
  return (
   <>
    
<div class="relative mt-6 flex flex-col rounded-xl bg-white bg-clip-border text-gray-800 shadow-md w-80 hover:shadow-xl">
  <div class="p-6">
    
     <img src={src} width={60} height={60} className=' my-3'/>
    <h5 class="mb-2 block font-bold font-sans text-xl leading-snug tracking-normal text-blue-gray-900 antialiased">
      {title}
    </h5>
    <p class="block font-sans  font-semibold leading-relaxed text-inherit antialiased text-lg ">
      {value} {title}
    </p>
  </div>
  
</div>

</>
  )
}

export default Card