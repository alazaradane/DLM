import React from 'react'
import Hero from '../sections/Hero'
import Feature from '../sections/Features'
import Boost from '../sections/Boost'


const Home = () => {
  return (
    <section className=' container'>
      <div>
       <Hero/>
      </div>
      <div>
        <Feature/>
      </div>
      <div>
        <Boost/>
      </div>

    </section>
  )
}

export default Home