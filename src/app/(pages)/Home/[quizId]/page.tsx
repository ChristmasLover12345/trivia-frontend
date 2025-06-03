"use client";

import { useUserContext } from "@/Context/userContext";
import { GetQuizById } from "@/utils/DataServices";
import { QuizModel } from "@/utils/Interface";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { Token } = useUserContext();

  const [quiz, setQuiz] = useState<QuizModel>();
  const [loading, setLoading] = useState(true)

  const params = useParams();
  const raw = params.quizId;
  const quizId = raw ? parseInt(raw as string) : null;

  const router = useRouter();

  useEffect(() => {
    if (!Token || Token === "") {
      router.push("/Login");
    }
  }, [Token]);

  useEffect(() => {
    const fetchQuiz = async () => {
      if (!quizId) {
        console.error("Quiz ID is not valid");
        return;
      }

      const fetchedQuiz = await GetQuizById(quizId, Token);
      if (!fetchedQuiz) {
        console.error("Failed to fetch quiz data");
        return;
      }

      setQuiz(fetchedQuiz);
      setLoading(false);
    };

    if (Token && quizId) {
    fetchQuiz();
    }

    
  }, [quizId, Token]);


  return  (

    <div>
      
    </div>

  )

};

export default Page;
