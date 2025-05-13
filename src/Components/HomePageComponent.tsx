'use client'

import Image from 'next/image'
import React from 'react'
import Logo from '../../public/QuizLibrary_LogoTrue.png'
import { CircleUserRound, Plus } from 'lucide-react'

const HomePageComponent = () => {
  return (
    <div className='min-w-screen min-h-screen flex flex-col items-center  bg-gray-500'>

        {/* This is the navbar */}
        <div className='w-full h-16 bg-gray-400 flex items-center justify-between px-4'>
            
            <Image src={Logo} alt='Logo' className='h-[40px] w-[80px] cursor-pointer' aria-label='Profile'/>

            <div className='flex items-center space-x-4 cursor-pointer' aria-label='Create a Quiz'>
                <CircleUserRound className='h-[40px] w-[40px]'/>
                <div className='bg-blue-400 flex items-center justify-center h-[40px] w-[160px] rounded-2xl'>
                    <Plus className='h-[20px] w-[20px] mr-2'/>
                    <h3 className='text-white '>Create a Quiz</h3>   
                </div>
            </div>
        </div>

        {/* This is the main content */}


        {/* Filter buttons */}
        <div className='flex flex-row items-center justify-around w-[60%] mt-8'>

          <button className='bg-gray-400 text-white rounded-2xl px-4 py-2 m-1 cursor-pointer hover:bg-gray-600 active:text-black active:bg-gray-300 text-3xl w-[160px]'>
           Show All
          </button>

          <button className='bg-gray-400 text-white rounded-2xl px-4 py-2 m-1 cursor-pointer hover:bg-gray-600 active:text-black active:bg-gray-300 text-3xl w-[160px]'>
           Easy
          </button>

          <button className='bg-gray-400 text-white rounded-2xl px-4 py-2 m-1 cursor-pointer hover:bg-gray-600 active:text-black active:bg-gray-300 text-3xl w-[160px]'>
           Medium
          </button>

          <button className='bg-gray-400 text-white rounded-2xl px-4 py-2 m-1 cursor-pointer hover:bg-gray-600 active:text-black active:bg-gray-300 text-3xl w-[160px]'>
           Hard
          </button>

        </div>

        

    </div>
  )
}

export default HomePageComponent