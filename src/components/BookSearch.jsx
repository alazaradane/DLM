import React from "react"
import { logo } from "../assets/images"
import { FaSearch } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import ShoppingCartIcon from "./ShoppingCartIcon";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";


const BookSearch = () => {
    return (
      <section id="#search" className=" max-container flex m-5 items-center gap-[10rem] ">
        <div className=" mr-10 -ml-5">
          <img src={logo} className=" w-[12rem] h-[10rem]"/>
        </div>
        <div className=" py-2 pr-6 pl-3 border border-gray-300 rounded-[5rem] focus:border-indigo-500 flex items-center justify-between w-[30rem]" >
          <input type="text" class="focus:outline-none " placeholder="Search by title..."/>
          <FaSearch/>
        </div>
        <div className=" flex items-center gap-3 ">
          <ShoppingCartIcon itemCount={1}/>
          <p className=" font-bold font-roboto">Hi, Alazar</p>
        </div>
      </section>
    )
  }
  
export default BookSearch