"use client";

import { useUserContext } from "@/Context/userContext";
import { CreateUser, logIn } from "@/utils/DataServices";
import { LoginModel, UserTokenModel } from "@/utils/Interface";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginComponent = () => {
  const [signUpPage, setSignUpPage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [inputName, setInputName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { setToken, setUserId, setUserName } = useUserContext();

  const router = useRouter();

  const handleSubmit = async () => {
    if (inputName.trim() === "" || password.trim() === "") {
      setErrorMessage("Username and/or Password cannot be empty.");
      return;
    }

    if (signUpPage) {
      const newUser: LoginModel = {
        Username: inputName.trim(),
        Password: password.trim(),
      };

      const succes = await CreateUser(newUser);

      if (succes) {
        setErrorMessage("");
        setSignUpPage(false);
      } else {
        setErrorMessage("User already exists");
      }
    } else {
      const newUser: LoginModel = {
        Username: inputName.trim(),
        Password: password.trim(),
      };

      const succes = await logIn(newUser);

      if (succes == null) {
        setErrorMessage("Invalid username or password");
      } else {
        setErrorMessage("");
        setToken(succes.Token);
        setUserId(succes.userId);
        setUserName(succes.Username);

        router.push("/Home");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-500">
      <h1 className="text-6xl">{signUpPage ? "Sign Up" : "Login"}</h1>

      <h2 className="text-red-600 text-[20px]">{errorMessage}</h2>

      <input
        onChange={(e) => {
          setInputName(e.target.value);
        }}
        type="text"
        placeholder="Username"
        className="rounded-2xl mt-6 bg-white text-black ps-0.5 w-[300px] h-[50px]"
      />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="text"
        placeholder="Password"
        className="rounded-2xl mt-3 bg-white text-black ps-0.5 w-[300px] h-[50px]"
      />
      <button
        onClick={handleSubmit}
        className="rounded-2xl w-[150px] h-[50px] bg-blue-500 text-white mt-4"
      >
        {signUpPage ? "Sign Up" : "Login"}
      </button>

      <button
        onClick={() => setSignUpPage(!signUpPage)}
        className="mt-4 text-blue-500 underline"
      >
        {signUpPage
          ? "Already have an account? Login"
          : "Don't have an account? Sign Up"}
      </button>
    </div>
  );
};

export default LoginComponent;
