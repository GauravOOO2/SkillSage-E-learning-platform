import React from 'react'
import arrowIcon from '../assets/greater-than.png'
import homeIcon from '../assets/home-removebg-preview.png'

const Tabs = () => {
  return (
    <div className='flex mx-16 my-12' >
      <div className='flex' >
        <div className='h-5	w-5 top-1 left-1.5 ' >
          <img src={homeIcon} alt='home' />
        </div>
        <div className='w-4 pt-1 		'  >
          <img src={arrowIcon} alt='arrow' />
        </div>
        <p className='text-lg	text-gray-500 leading-5	content-center font-inter font-normal		 ' >
          Flashcard
        </p>
      </div>
      <div className='w-4 pt-1' >
        <img src={arrowIcon} alt='arrow' />
      </div>
      <p className='text-lg	text-gray-500 leading-5	content-center font-inter  font-normal		 ' >
        Mathematics
      </p>
      <div className='w-4 pt-1' >
        <img src={arrowIcon} alt='arrow' />
      </div>
      <p className=' text-lg text-blue-900 font-semibold leading-5 content-center font-inter	' >
        Relation and Function
      </p>
    </div>
  )
}

export default Tabs