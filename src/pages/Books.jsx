import React from 'react'
import BookSearch from '../components/BookSearch'
import BookList from '../components/BookList'
import { useState } from 'react'
import { initalBook } from '../constants'

const Books = () => {

  const [cartItems, setCartItems] = useState({});
  const [searchField, setSearchField] = useState('');
  
  const handleInputChange = (e) => {
    setSearchField(e.target.value);
   };

  
   const filterBooks = initalBook.filter(book => {
    return book.name.toLowerCase().includes(searchField.toLowerCase());
  });
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
            <BookSearch cartCounter={cartItemCount} onInputChange={handleInputChange}/>
        </div>
        <div>
             <BookList books={filterBooks} handleAddToCart={handleAddToCart} cartItems={cartItems} />
        </div>
    </section>
  )
}

export default Books