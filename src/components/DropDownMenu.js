import React from 'react'
import arrowDown from '../assets/down-arrow.png'

const DropDownMenu = () => {
    return (
        <div>
            <p className=' font-inter font-bold	text-5xl leading-10	tracking-widest	
        bg-gradient-to-b from-[rgba(6,40,110,1)] to-[rgba(22,78,192,1)] 
        bg-clip-text text-transparent  mx-14 my-8' >
                FAQ
            </p>



            <div className=' w-3/6	gap-8 mx-14 my-8' >
                <div className='flex border border-blue-600 p-3 my-6 rounded-lg justify-between ' >
                    <p className='font-semibold text-base leading-7 font-inter' >
                        Can education flashcards be used for all age groups?
                    </p>
                    <div className='w-3.5 h-2 top-3.5 left-1 pt-2 	' >
                        <img src={arrowDown} alt='arrowDowm' />
                    </div>
                </div>



                <div className='flex border border-blue-600 p-3 my-6 rounded-lg justify-between ' >
                    <p className='font-semibold text-base leading-7 font-inter ' >
                        How do education flashcards work?
                    </p>
                    <div className='w-3.5 h-2 top-3.5 left-1  pt-2	' >
                        <img src={arrowDown} alt='arrowDowm' />
                    </div>
                </div>

                <div className='flex  border border-blue-600 p-3  rounded-lg my-6 justify-between' >
                    <p className='font-semibold text-base leading-7 font-inter' >
                        Can education flashcards be used for test preparation?
                    </p>
                    <div className='w-3.5 h-2 top-3.5 left-1  pt-2	' >
                        <img src={arrowDown} alt='arrowDowm' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DropDownMenu