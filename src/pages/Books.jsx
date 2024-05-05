import React from 'react'
import BookSearch from '../components/BookSearch'
import BookList from '../components/BookList'

const Books = () => {
  return (
    <section id="books">
        <div className=' flex  justify-center '> 
            <BookSearch/>
        </div>
        <div>
             <BookList/>
        </div>
    </section>
  )
}

export default Books