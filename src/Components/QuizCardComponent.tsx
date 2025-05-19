'use client'

import { QuizModel } from '@/utils/Interface'
import Image from 'next/image'
import React from 'react'

const QuizCardComponent = ( {
    id,
    creatorId,
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
      {/* bg-image */}
      
      <img src={imageUrl} alt="Quiz card image" className=''/>

      {/* absolute div where all the content is gonna be in */}

      {/* quiz name                    difficulty */}


      {/* created by */}

    </div>
  )
}

export default QuizCardComponent