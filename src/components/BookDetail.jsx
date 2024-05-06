import React from 'react';
import { useParams } from 'react-router-dom';
import { initalBook } from '../constants';
import PageNotFound from './PageNotFound';
import BookCard from './BookCard';
import { useState } from 'react';
import BookSearch from './BookSearch';

const BookDetail = () => {

  const [cartItems, setCartItems] = useState({});
  const { bookId } = useParams();
  const book = initalBook.find((book) => book.id === parseInt(bookId));
  console.log("Book category:", book?.category);
  const moreBooks = initalBook.filter((intBook) => {
    return intBook.category === book?.category;
  });
  console.log("More books:", moreBooks);

  if (!book) {
    return (
      <div className='-mt-[7rem]'>
        <PageNotFound />
      </div>
    );
  }

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
  const handleInputChange = (e) => {
    setSearchField(e.target.value);
   };
   const handleCategoryChange = (category)=>{
    setSelectedCategory(category)
  }

  return (
    <section id='bookdetail' className='py-5 px-[7rem]'>
      <div className=' flex  justify-center '> 
            <BookSearch cartCounter={cartItemCount} onInputChange={handleInputChange} onCategoryChange = {handleCategoryChange}/>
        </div>
      <div className='my-[3rem]'>
        <h1 className='text-[2rem] font-bold'>Book Detail</h1>
      </div>
      <div className='flex'>
        <div>
          <img src={book.image} alt={book.name} className='w-[22rem] h-[30rem]' />
        </div>
        <div className='mx-[10rem] mt-6 w-[30rem]'>
          <h1 className='my-5 text-4xl font-bold'>{book.name}</h1>
          <p className='font-semibold'>
            Authors <span className='text-base italic ml-3'>{book.author}</span>
          </p>
          <span className='inline-flex items-center rounded-md my-4 bg-gray-50 px-2 py-1 text-md font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10'>
            {book.category}
          </span>
          <p>Description: {book.description}</p>
          <button className='bg-indigo-800 py-1 px-5 text-white rounded-[0.3rem] mt-[1rem]'>Add to Cart</button>
        </div>
      </div>
      <div className='mt-10'>
        <div>
          <p className='text-3xl font-bold'>More books</p>
        </div>
        <div className='mx-auto mt-10 grid max-w-2xl items-center justify-center grid-cols-1  gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-4'>
          {moreBooks.map((moreBook) => (
            <BookCard 
            book={moreBook} 
            cartItems={cartItems} 
            key={moreBook.id} 
            image={moreBook.image}  
            name={moreBook.name} 
            category={moreBook.category} 
            author={moreBook.author} 
            detail={moreBook.description}  
            handleAddToCart={handleAddToCart}
            onmoreBookClick={()=>onBookClick(book.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookDetail;
