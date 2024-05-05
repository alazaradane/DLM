import React from 'react'
import { book1 } from '../assets/images'
import { useState } from 'react';

const BookCard = ({book, image, name, category, detail, author, handleAddToCart, cartItems }) => {

 
  
  const inCart = cartItems[book.id] ? true : false;

  const handleToggleAddToCart = () => {
    if (addedToCart) {
      handleAddToCart(book, false);
      setAddedToCart(false);
    } else {
      handleAddToCart(book, true);
      setAddedToCart(true);
    }
  };

  return (
    <section id="bookcard" className='w-[12.25rem] flex flex-col max-container border-1 border-slate-700'>
        <div className=' w-[12rem] h-auto border-1 border-slate-600'>
          <img src={image} className=' rounded-[0.5rem]'/>
        </div>
        <div className='flex items-start justify-start'>
          <p className=' pt-4 pl-3 text-xl font-bold font-sans'>{name}</p>
        </div>
        <div className=' flex items-start justify-start py-2 pl-3 pr-1'>
          <p className=' text-md text-slate-700 font-sans'>{detail}</p>
        </div>
        <div>
          <p className=' text-md text-slate-700 font-semibold font-sans pl-3'> {author}</p>
        </div>
        <div className=' px-3 py-2 flex justify-around items-center'>
          <span className=' inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10'>{category}</span>
          <button onClick={() => handleAddToCart(book.id)}>{inCart ? 'Added' : 'Add to Cart'}</button>
        </div>

    </section>
  )
}

export default BookCard