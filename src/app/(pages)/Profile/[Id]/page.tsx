import QuizCardComponent from '@/Components/QuizCardComponent';
import { QuizCardModel, UserModel } from '@/utils/Interface';
import { CircleUserRound, Plus, Trophy } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const Page = () => {
const [activeFilter, setActiveFilter] = useState('Show All');
const [filteredQuizzes, setFilteredQuizzes] = useState<QuizCardModel[]>([]);



  // REmember to put this back in when you have the user profile data
  // useEffect(() => {
  //   if (activeFilter === 'Show All') {
  //     setFilteredQuizzes(userProfile.quizzes);
  //   } else {
  //     setFilteredQuizzes(userProfile.quizzes.filter(quiz => quiz.difficulty === activeFilter));
  //   }
  // }, [activeFilter]);

  const filterButtons = ['Show All', 'Easy', 'Medium', 'Hard'];
  
  return  (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className='w-full h-16 bg-gray-400 flex items-center justify-between px-4'>
        <div className='h-[40px] w-[80px] bg-gray-600 rounded-lg flex items-center justify-center cursor-pointer'>
          <span className='text-white font-bold'>QUIZ</span>
        </div>

        <div className='flex items-center space-x-4 cursor-pointer'>
          <CircleUserRound className='h-[40px] w-[40px] text-white'/>
          <div className='bg-blue-400 flex items-center justify-center h-[40px] w-[160px] rounded-2xl hover:bg-blue-500 transition-colors duration-200'>
            <Plus className='h-[20px] w-[20px] mr-2 text-white'/>
            <h3 className='text-white'>Create a Quiz</h3>   
          </div>
        </div>
      </div>

      {/* Profile Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex flex-col items-center space-y-4">
            {/* Default Avatar */}
            <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <CircleUserRound className="w-20 h-20 text-white" />
            </div>

            {/* Profile Info */}
            {/* <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-800">{userProfile.username}</h1>
            </div> */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Filter Buttons */}
        <div className='flex flex-wrap items-center justify-center gap-4 mb-8'>
          {filterButtons.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-2xl px-6 py-3 font-medium transition-all duration-200 min-w-[120px] ${
                activeFilter === filter
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-gray-400 text-white hover:bg-gray-500'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Quizzes Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            My Quizzes ({filteredQuizzes.length})
          </h2>
          {/* Update thisonce you actually add the fetches */}
          {filteredQuizzes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* {filteredQuizzes.map((quiz) => (
                <QuizCardComponent 
                id={5}
                creatorId={1}
                CreatorUsername='JohnDoe'
                title='Sample Quiz'
                description='This is a sample quiz description.'
                imageUrl={}
                difficulty='Easy'
          
                />
              ))} */}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="bg-gray-200 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No quizzes found</h3>
              <p className="text-gray-500 mb-6">
                {activeFilter === 'Show All' 
                  ? "You haven't created any quizzes yet." 
                  : `No ${activeFilter.toLowerCase()} quizzes found.`}
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-2xl font-medium transition-colors duration-200">
                Create Your First Quiz
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page