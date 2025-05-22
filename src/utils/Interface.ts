export interface UserModel {
    id: number;
    username?: string;
    quizzes?: QuizModel[];
    salt?: string;
    hash?: string;
  }

  
  export interface QuizModel {
    id: number;
    creatorId: number;
    CreatorUsername?: string;
    title?: string;
    description?: string;
    imageUrl?: string;
    difficulty?: string;
    winScore?: number;
    winMessage?: string;
    loseMessage?: string;
    isDeleted: boolean;
    questions?: QuestionModel[];
  }
  
  export interface QuestionModel {
    id: number;
    quizId: number;
    questionText?: string;
    score: number;
    correctAnswer?: string;
    wrongAnswer1?: string;
    wrongAnswer2?: string;
    wrongAnswer3?: string;
  }
  

  export interface LoginModel {
    Username: string;
    Password: string;
  }

  export interface UserTokenModel {
    Token: string;
    userId: number;
    userName: string;
    setUserName: (userName: string) => void;
    setToken: (token: string) => void;
    setUserId: (userId: number) => void;
  }

