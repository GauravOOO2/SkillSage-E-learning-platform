import React, { useState } from 'react'
import arrowDown from '../assets/down-arrow.png'

const DropDownMenu = () => {
  const [dropDowns, setDropDowns] = useState([false, false, false]);

  const toggleDropDown = (index) => {
    const updatedDropDowns = dropDowns.map((state, i) => i === index ? !state : false);
    setDropDowns(updatedDropDowns);
  };

  return (
    // Dropdown Menu
    <div className='mx-4 sm:mx-8 md:mx-12 lg:mx-14 my-8'>
      <p className='font-inter font-bold text-3xl sm:text-4xl lg:text-5xl leading-10 tracking-widest bg-gradient-to-b from-[rgba(6,40,110,1)] to-[rgba(22,78,192,1)] bg-clip-text text-transparent mx-4 sm:mx-14 my-4 sm:my-8'>
        FAQ
      </p>
      <div className='cursor-pointer w-full pr-6 sm:w-3/4 sm:pr-5 lg:w-3/6 gap-4 sm:gap-8 mx-4 sm:mx-14 my-4 sm:my-8'>
        {dropDowns.map((dropDown, index) => (
          <div key={index} className='my-4 sm:my-6'>
            <div
              onClick={() => toggleDropDown(index)}
              className='flex border border-blue-600 p-3 rounded-lg justify-between'
            >
              <p className='font-semibold text-base sm:text-lg leading-7 font-inter'>
                {index === 0
                  ? 'Can education flashcards be used for all age groups?'
                  : index === 1
                  ? 'How do education flashcards work?'
                  : 'Can education flashcards be used for test preparation?'}
              </p>
              <div className='w-3.5 h-2 top-3.5 left-1 pt-2'>
                <img src={arrowDown} alt='arrowDown' />
              </div>
            </div>

            <div
              className={`p-3 border border-blue-600 rounded-lg justify-between ${
                dropDown ? 'max-h-full' : 'hidden sm:hidden md:hidden xl:hidden 2xl:hidden'
              }`}
            >
              <p className='font-semibold text-base sm:text-lg leading-7 font-inter'>
                {index === 0
                  ? 'When studying, students may sometimes choose to have different coloured flashcards for different topics or subject areas so they’re easy to keep tidy, or to mix up when revising with interleaving strategies.'
                  : index === 1
                  ? 'Education flashcards can indeed be versatile tools suitable for learners of all ages, but their effectiveness hinges on content, design, and complexity. To be effective, the flashcards must align with the cognitive abilities and interests of the target age group.'
                  : 'Flash cards are a simple, versatile, yet often underexploited resource. I would like to offer some reasons for using flash cards and a selection of activities for use in the Young Learner classroom.'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default DropDownMenu