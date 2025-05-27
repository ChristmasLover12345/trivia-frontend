'use client'

import React, { useState } from 'react'

const QuizCardModalComponent = () => {
const [isOpen, setIsOpen] = useState<boolean>(false)


  return (
    <div onClick={() => setIsOpen(true)} className='relative bg-black p-4 rounded-lg shadow-md'>

        <h2 className='text-white'>Learn More</h2>

        <div className={isOpen ? 'absolute block w-full h-full bg-black opacity-50 z-10' : 'hidden'}>
        </div>

        <div className={isOpen ? 'absolute block w-[60%] h-1/2 bg-white z-20' : 'hidden'}>

            <h2 className='text-black'>Modal Content</h2>
            <button onClick={() => setIsOpen(false)} className='bg-red-500 text-white p-2 rounded'>Close</button>

        </div>

    </div>
  )
}

export default QuizCardModalComponent