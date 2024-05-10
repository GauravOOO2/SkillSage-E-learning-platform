import React from 'react'
import smallLogo from '../assets/smallLogo-removebg-preview.png'
import LogoLetters from '../assets/Published-by-Hyggexlogo.png-removebg-preview.png'
import addButton from '../assets/addButton-removebg-preview.png'

const BodyDivision3 = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between mx-4 sm:mx-8 md:mx-12 lg:mx-16 my-8 sm:my-12'>
  <div className='flex items-center w-full sm:w-auto h-auto sm:h-20 lg:h-24 sm:pl-6 lg:pl-0 gap-4 sm:gap-6 mx-2 sm:mx-5'>
    <img className='rounded-full h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 px-2 py-4 shadow-lg shadow-blue-500/60' src={smallLogo} alt='Small Logo' />
    <img className='w-auto h-12 sm:h-16 lg:h-20' src={LogoLetters} alt='Logo' />
  </div>

  <div className='flex items-center sm:pt-10 pl-4 pt-3 '>
    <div className='w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 top-0.5 sm:top-1.5 left-0.5 sm:left-1.5'>
      <img src={addButton} alt='Add' />
    </div>
    <p className='p-2 font-inter font-semibold text-xl sm:text-2xl lg:text-3xl leading-8 bg-gradient-to-b from-[rgba(6,40,110,1)] to-[rgba(22,78,192,1)] bg-clip-text text-transparent'>
      Create Flashcard
    </p>
  </div>
</div>

  )
}

export default BodyDivision3