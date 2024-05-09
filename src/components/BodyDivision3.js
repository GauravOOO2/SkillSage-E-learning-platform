import React from 'react'
import smallLogo from '../assets/smallLogo-removebg-preview.png'
import LogoLetters from '../assets/Published-by-Hyggexlogo.png-removebg-preview.png'
import addButton from '../assets/addButton-removebg-preview.png'

const BodyDivision3 = () => {
  return (
    <div className='flex justify-between mx-8 my-12 ' >
      <div className='flex w-56	h-20 6	left-28	gap-6	mx-5' >
      <img  className='rounded-full  px-2 py-4 shadow-lg  shadow-blue-500/60 '
       src={smallLogo} />  
      <img className='w-56' 
      src={LogoLetters} alt='Logo' />
      </div>
      
      <div className='flex pt-10' >
        <div className='w-12	h-12 top-1.5	left-1.5' >
        <img src={addButton} alt='Add' />
        </div>
        <p className='p-2 font-inter font-semibold	 text-3xl leading-8	
        bg-gradient-to-b from-[rgba(6,40,110,1)] to-[rgba(22,78,192,1)] 
        bg-clip-text text-transparent 
         
         ' > 
        Create Flashcard 
        </p>
      </div>
    </div>
  )
}

export default BodyDivision3