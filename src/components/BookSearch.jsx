import React from "react"
import { logo } from "../assets/images"
import { FaSearch } from "react-icons/fa";
import ShoppingCartIcon from "./ShoppingCartIcon";
import Category from '../components/Category'
import Banner from "./Banner";
import CartModal from '../components/CartModal'
import { useState } from "react";
import { initalBook } from "../constants";
import { useEffect } from "react";

const BookSearch = ({ onSelectedBooksChange,userEmail, userName, cartCounter, onInputChange, onCategoryChange, cartItems }) => {

  
  const [selectedBooks, setSelectedBooks] = useState([]); 
  const [showModal, setShowModal] = useState(false);

  const handleShopIconClick = () => {
    setShowModal(!showModal); 
    const selectedBookData = Object.keys(cartItems).map(bookId => {
      const selectedBook = initalBook.find(book => book.id.toString() === bookId);
      return selectedBook;
    });
    setSelectedBooks(selectedBookData);
  };
  
  useEffect(() => {
    onSelectedBooksChange(selectedBooks);
  }, [selectedBooks]); 

  const handleCloseModal = () => {
    setShowModal(false);
  };

    return (
      <section id="#search" className=" max-container flex flex-col mt-4 items-center  ">
        <div className=" max-container flex items-center gap-[10rem]">
          <div className=" mr-10 -ml-5">
            <img src={logo} className=" w-[12rem] h-[10rem]"/>
          </div>
          <div className=" py-2 pr-6 pl-3 border border-gray-300 rounded-[5rem] focus:border-indigo-500 flex items-center justify-between w-[30rem]" >
            <input type="text" class="focus:outline-none " placeholder="Search by title..." onChange={onInputChange}/>
            <FaSearch/>
          </div>
          <div className=" flex items-center gap-3 ">
           { cartCounter && <ShoppingCartIcon onClick={handleShopIconClick} itemCount={cartCounter}/>}
           {userName && <p className="font-bold font-roboto">Hi, {userName}</p>}
          </div>
        </div>
        <div className=" flex gap-[5rem]">
          <span className=" text-indigo-800 text-lg font-bold font-sans cursor-pointer ">
            Home
          </span>
          <span className="text-indigo-800 text-lg font-bold font-sans cursor-pointer">
            Best Seller
          </span>
          <span className=" -mt-3">
            <Category onCategoryChange={onCategoryChange}/>          
          </span>     
          <span className="text-indigo-800 text-lg font-bold font-sans cursor-pointer">
            Find Store
          </span>
          <span className="text-indigo-800 text-lg font-bold font-sans cursor-pointer">
            Blog
          </span>
        </div>
        <div className=" w-full">
          <Banner/>
        </div>
        {showModal && (
        <CartModal selectedBooks={selectedBooks} onCloseModal={handleCloseModal} />
      )}
      </section>
    )
  }
  
export default BookSearch