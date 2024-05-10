import React from 'react'
import BookSearch from '../components/BookSearch'
import BookList from '../components/BookList'
import { useState } from 'react'
import { initalBook } from '../constants'
import { useNavigate } from 'react-router-dom'

const Books = ({userName, userEmail}) => {

  const [cartItems, setCartItems] = useState({});
  const [searchField, setSearchField] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();
  
  const handleInputChange = (e) => {
    setSearchField(e.target.value);
   };
  const handleCategoryChange = (category)=>{
    setSelectedCategory(category)
  }
  const handleShowCart = ()=>{
    setShowCart(!showCart)
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
            <BookSearch cartItems={cartItems} userName={userName} userEmail={userEmail} cartCounter={cartItemCount} onInputChange={handleInputChange} onCategoryChange = {handleCategoryChange} onCartChange ={handleShowCart}/>
        </div>
        <div>         
            {userName && userEmail ? (
              <BookList onBookClick={handleBookClick} books={filteredBooks} handleAddToCart={handleAddToCart} cartItems={cartItems} />
                ) : (
                <div>Loading...</div>
            )}
        </div>
    </section>
  )
}

export default Books