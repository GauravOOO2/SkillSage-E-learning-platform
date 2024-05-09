import React from 'react'
import logo from '../assets/Hyggex-logo-removebg-preview.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className=' mx-16 my-12 relative grid grid-cols-12' >
      <div className="w-48 h-10	top-8	left-24 col-span-3	" >      
        <img className='' src={logo} alt='Logo' />
      </div>
              <div className="absolute w-[34rem] right-0 col-span-9 flex justify-between ">

               <a href='#' className="text-gray-600 m-4  font-inter font-normal leading-5 text-lg	 ">
                  Home
                </a>
                <a href='#' className="text-gray-600 m-4 font-inter font-normal leading-5 text-lg	 ">
                  Flashcard
                </a>
                <a href='#' className="text-gray-600 m-4 font-inter  font-normal leading-5 text-lg	 ">
                  Contact
                </a>
                <a href='#' className="text-gray-600 m-4  font-normal font-inter leading-5 text-lg	 ">
                  FAQ
                </a>
                <button class="w-32	h-12 pt-3.5	pr-10	pb-3 pl-10 gap-2.5 text-lg	leading-5	font-medium font-inter bg-gradient-to-b from-blue-900 to-blue-600 text-white  rounded-full shadow-md ">
                  Login
                </button>
              </div>
    </div>
  )
}

export default Header