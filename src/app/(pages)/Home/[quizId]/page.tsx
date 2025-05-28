'use client'

import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const params = useParams()
    const raw = params.quizId
    const quizId = raw ? parseInt(raw as string) : null



  return (
    <div>
      {quizId}
    </div>
  )
}

export default page