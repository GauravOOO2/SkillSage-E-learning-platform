import React, { useState } from 'react'
import logo from '../assets/Hyggex-logo-removebg-preview.png'
import { Link } from 'react-router-dom'
import clsx from 'clsx';

const Header = () => {

  const [sideMenuOpen, setSideMenu] = useState(false);

  return (
    <nav className='mx-4 sm:mx-8 md:mx-12 lg:mx-16 my-8 sm:my-10 md:my-12 relative grid grid-cols-12'>

      <button
        className='flex justify-center items-center  lg:hidden hover:bg-gradient-to-b from-blue-900 to-blue-600   hover:text-white rounded-lg w-10 h-10 	' >
        <svg
          onClick={() => setSideMenu(true)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="
          w-6 h-6
          ">
          <path stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      {/* Container */}


      <div className={
        clsx(
          " fixed w-full h-full lg:hidden bg-black/50 backdrop-blur-sm top-0 right-0 -translate-x-full transition-all ",
           sideMenuOpen && 
           "translate-x-0"
        )
      } >

        <section className='bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50' >

          <div className='' >
            <svg
              onClick={() => setSideMenu(false)}
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </div>

          <ul className=' flex flex-col lg:flex-row pt-5 ' >
            <li href='#' className="hover:text-[#06286E] hover:underline cursor-pointer text-gray-600 m-2 sm:m-4 font-inter font-normal leading-10 text-lg">
              Home
            </li>
            <li href='#' className="hover:text-[#06286E] hover:underline cursor-pointer  text-gray-600 m-2 sm:m-4 font-inter font-normal leading-10 text-lg">
              Flashcard
            </li>
            <li href='#' className="hover:text-[#06286E] hover:underline cursor-pointer text-gray-600 m-2 sm:m-4 font-inter font-normal leading-10 text-lg">
              Contact
            </li>
            <li href='#' className="hover:text-[#06286E] hover:underline cursor-pointer text-gray-600 m-2 sm:m-4 font-inter font-normal leading-10 text-lg">
              FAQ
            </li>
            <button className=" w-24  sm:w-32 h-10 sm:h-12 pt-2.5 sm:pt-2.5 pr-8 sm:pr-10 pb-2.5 sm:pb-3 pl-8 sm:pl-10 gap-2 text-base sm:text-lg leading-5 font-medium font-inter bg-gradient-to-b from-blue-900 to-blue-600  text-white rounded-full shadow-md  ">
              Login
            </button>
          </ul>

        </section>

      </div>




      <div className=" flex lg:w-48 md:w-48 w-36 h-10 top-8 sm:top-10 md:top-12 lg:top-8 left-4 sm:left-8 md:left-12 lg:left-24 col-span-3">
        <a href='#' >
          <img className='ml-5' src={logo} alt='Logo' />
        </a>
      </div>

      {/* Navigation elements */}

      <div className="hidden lg:block absolute right-0 col-span-9 sm:col-span-8 md:col-span-7 lg:col-span-6  ">

        <ul className=' flex flex-col lg:flex-row ' >
          <li href='#' className="hover:text-[#06286E] hover:underline cursor-pointer text-gray-600 m-2 sm:m-4 font-inter font-normal leading-5 text-lg">
            Home
          </li>
          <li href='#' className="hover:text-[#06286E] hover:underline cursor-pointer  text-gray-600 m-2 sm:m-4 font-inter font-normal leading-5 text-lg">
            Flashcard
          </li>
          <li href='#' className="hover:text-[#06286E] hover:underline cursor-pointer text-gray-600 m-2 sm:m-4 font-inter font-normal leading-5 text-lg">
            Contact
          </li>
          <li href='#' className="hover:text-[#06286E] hover:underline cursor-pointer text-gray-600 m-2 sm:m-4 font-inter font-normal leading-5 text-lg">
            FAQ
          </li>
          <button className=" w-24 sm:w-32 h-10 sm:h-12 pt-2.5 sm:pt-2.5 pr-8 sm:pr-10 pb-2.5 sm:pb-3 pl-8 sm:pl-10 gap-2 text-base sm:text-lg leading-5 font-medium font-inter bg-gradient-to-b from-blue-900 to-blue-600  text-white rounded-full shadow-md  ">
            Login
          </button>
        </ul>
      </div>
    </nav>

  )
}

export default Header