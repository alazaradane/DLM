import React from 'react'
import BookSearch from '../components/BookSearch'
import BookList from '../components/BookList'
import { useState } from 'react'

const Books = () => {

  const [cartItems, setCartItems] = useState({});

  const handleAddToCart = (bookId) => {
    setCartItems(prevState => {
      if (prevState[bookId]) {
        const updatedCart = { ...prevState };
        delete updatedCart[bookId];
        return updatedCart;
      } else {
        return { ...prevState, [bookId]: true };
      }
    });
  };
  const cartItemCount = Object.keys(cartItems).length;

  return (
    <section id="books">
        <div className=' flex  justify-center '> 
            <BookSearch cartCounter={cartItemCount}/>
        </div>
        <div>
             <BookList handleAddToCart={handleAddToCart} cartItems={cartItems}/>
        </div>
    </section>
  )
}

export default Books