import React from 'react'
import bulbIcon from '../assets/bulb-removebg-preview.png'
import speakerIcon from '../assets/speaker-removebg-preview.png'
import backButton from '../assets/Back-removebg-preview.png'
import forwardButton from '../assets/forward-removebg-preview.png'
import expandButton from '../assets/expand-solid (1).png'
import refreshButton from '../assets/rotate-right-solid (1).png'

const BodyDivision2 = () => {
  return (
    <div className='mx-4 sm:mx-8 md:mx-12 lg:mx-16 my-8 sm:my-12 flex flex-col justify-center items-center'>

    {/* Navigation Options */}
    <div className='flex flex-wrap justify-center gap-3.5 sm:gap-6 my-4'>
      <div>
        <p className='underline decoration-solid w-auto h-8 px-3.5 gap-2.5 text-[#06286E] font-inter font-bold text-lg leading-6'>
          Study
        </p>
      </div>
      <div className='w-auto h-8 px-3.5 gap-2.5 font-inter font-medium leading-6 text-gray-500'>
        <p>Quiz</p>
      </div>
      <div className='w-auto h-8 px-3.5 gap-2.5 font-inter font-medium leading-6 text-gray-500'>
        <p>Test</p>
      </div>
      <div className='w-auto h-8 px-3.5 gap-2.5 font-inter font-medium leading-6 text-gray-500'>
        <p>Game</p>
      </div>
      <div className='w-auto h-8 px-3.5 gap-2.5 font-inter font-medium leading-6 text-gray-500'>
        <p>Others</p>
      </div>
    </div>
  
    {/* Main Content */}
    <div className='w-full  sm:w-3/6 pt-5'>
      <div className='h-72 sm:h-96 rounded-[42.51px] bg-custom-gradient'>
        <div className='flex justify-between p-4 sm:p-8'>
          <div className='w-6 h-8 sm:w-8 sm:h-10 left-2 top-1'>
            <img src={bulbIcon} alt='bulb' />
          </div>
          <div className='w-6 h-8 sm:w-8 sm:h-10 left-2 top-1'>
            <img src={speakerIcon} alt='speaker' />
          </div>
        </div>
        <div className='flex justify-center items-center h-full my-[-7rem]'>
          <p className='text-white font-lato text-xl sm:text-2xl lg:text-3xl leading-normal tracking-wide'>
            9 + 6 + 7x - 2x - 3
          </p>
        </div>
      </div>
  
      {/* Control Buttons */}
      <div className='flex justify-around pt-4 my-2'>
        <div className='w-8 h-8 sm:w-10 sm:h-10 pt-3.5'>
          <img src={refreshButton} alt='refresh' />
        </div>
        <div className='w-14 h-14 sm:w-16 sm:h-16'>
          <img src={backButton} alt='return' />
        </div>
        <div>
          <p className='font-inter font-bold text-2xl sm:text-3xl leading-7 pt-3'>
            01/10
          </p>
        </div>
        <div className='w-14 h-14 sm:w-16 sm:h-16'>
          <img src={forwardButton} alt='forward' />
        </div>
        <div className='w-7 h-8 sm:w-8 sm:h-10 pt-3.5'>
          <img src={expandButton} alt='Full Screen' />
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default BodyDivision2