import React from 'react'
import BookSearch from '../components/BookSearch'
import BookList from '../components/BookList'
import { useState } from 'react'
import { initalBook } from '../constants'
import { useNavigate } from 'react-router-dom'

const Books = () => {

  const [cartItems, setCartItems] = useState({});
  const [searchField, setSearchField] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();
  
  
  const handleInputChange = (e) => {
    setSearchField(e.target.value);
   };
  const handleCategoryChange = (category)=>{
    setSelectedCategory(category)
  }
  
  
  const filteredBooks = initalBook.filter((book) => {
    const searchQueryMatch = book.name.toLowerCase().includes(searchField.toLowerCase());
    const categoryMatch = selectedCategory ? book.category === selectedCategory.name : true;
    return searchQueryMatch && categoryMatch;
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

  const handleBookClick  = (bookId)=>{
    navigate(`/${bookId}`)
  }

  const cartItemCount = Object.keys(cartItems).length;

  return (
    <section id="books">
        <div className=' flex  justify-center '> 
            <BookSearch cartCounter={cartItemCount} onInputChange={handleInputChange} onCategoryChange = {handleCategoryChange}/>
        </div>
        <div>
             <BookList onBookClick={handleBookClick} books={filteredBooks} handleAddToCart={handleAddToCart} cartItems={cartItems} />
        </div>
    </section>
  )
}

export default Books