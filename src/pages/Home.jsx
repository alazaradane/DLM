import React from 'react'
import Hero from '../sections/Hero'
import Feature from '../sections/Features'
import Boost from '../sections/Boost'
import About from '../sections/About'
import Testimonial from '../sections/Testimonial'
import Newsletter from '../sections/Newsletter'
import Footer from '../sections/Footer'
import Price from '../sections/Prices'
import Blog from '../sections/Blog'


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
        <Price/>
      </div>
      <div>
        <Boost/>
      </div>
      <div>
        <About/>
      </div>
      <div>
        <Blog/>
      </div>
      <div>
        <Testimonial/>
      </div>
      <div>
        <Newsletter/>
      </div>
      <div>
        <Footer/>
      </div>

    </section>
  )
}

export default Home