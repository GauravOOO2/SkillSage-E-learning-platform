import React from 'react'
import bulbIcon from '../assets/bulb-removebg-preview.png'
import speakerIcon from '../assets/speaker-removebg-preview.png'
import backButton from '../assets/Back-removebg-preview.png'
import forwardButton from '../assets/forward-removebg-preview.png'
import expandButton from '../assets/expand-solid (1).png'
import refreshButton from '../assets/rotate-right-solid (1).png'

const BodyDivision2 = () => {
  return (
       <div className=' mx-8 my-12 flex flex-col justify-center items-center'>
        <div className=' gap-3.5 flex my-4' >
          <div >
            <p className='underline decoration-solid w-20 h-3.5 pt-0 pr-3 pb-0 pl-3 gap-2.5 text-[#06286E] font-inter font-bold text-xl	leading-6	 '>
              Study
            </p>
          </div>
          <div className='w-20 h-3.5 pt-0 pr-3 pb-0 pl-3 gap-2.5 font-inter font-medium	leading-6	 text-gray-500' >
            <p>Quiz</p>
          </div>
          <div className='w-20 h-3.5 pt-0 pr-3 pb-0 pl-3 gap-2.5 font-inter font-medium	leading-6	 text-gray-500' >
            <p>Test</p>
          </div>
          <div className='w-20 h-3.5 pt-0 pr-3 pb-0 pl-3 gap-2.5 font-inter font-medium	leading-6	 text-gray-500' >
            <p>Game</p>
          </div>
          <div className='w-20 h-3.5 pt-0 pr-3 pb-0 pl-3 gap-2.5 font-inter font-medium	leading-6	 text-gray-500' >
            <p>Others</p>
          </div>
        </div>


        <div className=' w-2/5 pt-5' >
          <div className='  h-96 rounded-[42.51px]  bg-custom-gradient' >
            <div className='flex justify-between p-8 ' >
              <div className='w-5 h-7	left-2	top-1	' >
                <img src={bulbIcon} alt='bulb' />
              </div>
              <div className='w-6 h-7	left-2	top-1 ' >
                <img src={speakerIcon} alt='speaker' />
              </div>
            </div>
            <div className='flex justify-center my-20 ' >
              <p className='text-white font-lato text-[38.26px] leading-[45.91px] tracking-[2px]' >
                9 + 6 + 7x - 2x - 3
              </p>
            </div>
          </div>



          <div className='flex justify-around pt-4 my-2' >
            <div className='w-8	h-8 pt-3.5 ' >
              <img src={refreshButton} alt='refresh' />
            </div>

            <div className='w-14	h-14 '  >
              <img src={backButton} alt='return' />
            </div>

            <div>
              <p className='font-inter font-bold	text-3xl	leading-7	pt-3' >
                01/10
              </p>
            </div>

            <div className='w-14	h-14' >
              <img src={forwardButton} alt='forward' />
            </div>

            <div className='w-7 h-8 pt-3.5 ' >
              <img src={expandButton} alt='Full Screen' />
            </div>
          </div>
        </div>
      </div>
  )
}

export default BodyDivision2