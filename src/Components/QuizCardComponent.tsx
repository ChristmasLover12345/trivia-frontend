'use client'


import { QuizModel } from '@/utils/Interface'
import React from 'react'

const QuizCardComponent = ( {
    id,
    creatorId,
    CreatorUsername,
    title,
    description,
    imageUrl,
    difficulty,
    winScore,
    winMessage,
    loseMessage,
    isDeleted,
    questions 

}: QuizModel ) => {


  return (
    // These are supposed to go into collumns, so remember to not define width and let them be responsive
    <div className='h-[400px] flex flex-col justify-between bg-white rounded-lg shadow-md relative'>
      
      
      <img src={imageUrl} alt="Quiz card image" className='h-60% w-full'/>

      <div className='flex flex-col bg-white justify-between h-[40%]'>

        <div className='flex flex-row justify-between items-center p-2'>
          <h1 className='text-2xl font-bold text-center'>{title}</h1>
          <p className='text-sm text-gray-500 text-center'>{difficulty}</p>
        </div>

        <h3>{`Created By ${CreatorUsername}`}</h3>

      </div>


    </div>
  )
}

export default QuizCardComponent


