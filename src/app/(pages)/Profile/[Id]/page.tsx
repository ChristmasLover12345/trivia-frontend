import { QuizCardModel, UserModel } from '@/utils/Interface';
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
  
  return (
    <div>P</div>
  )
}

export default Page