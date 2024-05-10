import React from 'react'
import arrowIcon from '../assets/greater-than.png'
import homeIcon from '../assets/home-removebg-preview.png'

const Tabs = () => {
  return (
    <div className='  flex mx-4 sm:mx-8 md:mx-12 lg:mx-16 my-8 sm:my-12'>
      <div className='flex items-center'>
        <div className='h-5 w-5 sm:h-6 sm:w-6 top-1 left-1.5'>
          <img src={homeIcon} alt='home' />
        </div>
        <div className='w-4 sm:w-6 pt-1 sm:pt-0.5 mg:pt-0.5 '>
          <img src={arrowIcon} alt='arrow' />
        </div>
        <p className='hover:text-[#06286E] hover:underline cursor-pointer	text-0 sm:text-[15px] md:text-[18px] text-gray-500 leading-5 content-center font-inter font-normal'>
          Flashcard
        </p>
      </div>
      <div className='w-4 sm:w-6 pt-3 sm:pt-0.5 mg:pt-0.5'>
        <img src={arrowIcon} alt='arrow' />
      </div>
      <p className='hover:text-[#06286E] hover:underline cursor-pointer	text-0  sm:text-[15px] md:text-[18px] text-gray-500 leading-5 content-center font-inter font-normal'>
        Mathematics
      </p>
      <div className='w-4 sm:w-6 pt-4 sm:pt-0.5 mg:pt-0.5 '>
        <img src={arrowIcon} alt='arrow' />
      </div>
      <p className='hover:text-[#06286E] hover:underline cursor-pointer	text-0 sm:text-[15px] md:text-[18px] text-blue-900 font-semibold leading-5 content-center font-inter'>
        Relation and Function
      </p>
    </div>

  )
}

export default Tabs