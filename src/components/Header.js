import React, {useState} from 'react'
import logo from '../assets/Hyggex-logo-removebg-preview.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='mx-4 sm:mx-8 md:mx-12 lg:mx-16 my-8 sm:my-10 md:my-12 relative grid grid-cols-12'>
  <div className="w-48 h-10 top-8 sm:top-10 md:top-12 lg:top-8 left-4 sm:left-8 md:left-12 lg:left-24 col-span-3">
    <img className='' src={logo} alt='Logo' />
  </div>
  <div className="  absolute right-0 col-span-9 sm:col-span-8 md:col-span-7 lg:col-span-6 flex justify-between">
    <a href='#' className=" text-gray-600 m-2 sm:m-4 font-inter font-normal leading-5 text-lg">
      Home
    </a>
    <a href='#' className="text-gray-600 m-2 sm:m-4 font-inter font-normal leading-5 text-lg">
      Flashcard
    </a>
    <a href='#' className="text-gray-600 m-2 sm:m-4 font-inter font-normal leading-5 text-lg">
      Contact
    </a>
    <a href='#' className="text-gray-600 m-2 sm:m-4 font-inter font-normal leading-5 text-lg">
      FAQ
    </a>
    <button className="w-24 sm:w-32 h-10 sm:h-12 pt-2.5 sm:pt-2.5 pr-8 sm:pr-10 pb-2.5 sm:pb-3 pl-8 sm:pl-10 gap-2 text-base sm:text-lg leading-5 font-medium font-inter bg-gradient-to-b from-blue-900 to-blue-600 text-white rounded-full shadow-md">
      Login
    </button>
  </div>
</div>

  )
}

export default Header