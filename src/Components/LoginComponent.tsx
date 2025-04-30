'use client'

import { CreateUser } from '@/utils/DataServices'
import { LoginModel } from '@/utils/Interface'
import React, { useState } from 'react'

const LoginComponent = () => {
const [signUpPage, setSignUpPage] = useState<boolean>(false)
const [errorMessage, setErrorMessage] = useState<string>("")
const [username, setUsername] = useState<string>("")
const [password, setPassword] = useState<string>("")

const handleSubmit = async () => {

 if (username === "" || password === "") {
    setErrorMessage("Username and/or Password cannot be empty.")
    return
  }

  if (signUpPage) {

    const newUser: LoginModel ={
      Username: username,
      Password: password
    }

    const succes = await CreateUser(newUser)

    if (succes) {
      setErrorMessage("")
    } else {
      setErrorMessage("User already exists")
    }

  }
  else
  {

    const newUser: LoginModel ={
      Username: username,
      Password: password
    }

    

  }


 }


  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-500'>

        <h1 className='text-6xl'>{signUpPage ? "Sign Up" : "Login"}</h1>

        <h2 className='text-red-600 text-[20px]'>{errorMessage}</h2>

        <input onChange={(e) => {setUsername(e.target.value)}} type="text" placeholder='Username' className='rounded-2xl mt-6 bg-white text-black ps-0.5 w-[300px] h-[50px]' />
        <input onChange={(e) => {setPassword(e.target.value)}} type="text" placeholder='Password' className='rounded-2xl mt-3 bg-white text-black ps-0.5 w-[300px] h-[50px]' />
        <button className='rounded-2xl w-[150px] h-[50px] bg-blue-500 text-white mt-4'>{signUpPage ? "Sign Up" : "Login"}</button>

        <button onClick={() => setSignUpPage(!signUpPage)} className='mt-4 text-blue-500 underline'>
          {signUpPage ? "Already have an account? Login" : "Don't have an account? Sign Up"}
        </button>

    </div>
  )
}

export default LoginComponent