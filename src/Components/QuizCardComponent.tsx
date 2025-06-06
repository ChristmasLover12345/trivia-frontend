"use client";

import { QuizCardModel, QuizModel } from "@/utils/Interface";
import React, { useEffect, useState } from "react";

import { DialogDescription, DialogHeader, DialogTitle, Dialog, DialogContent, DialogTrigger, DialogFooter  } from "./ui/dialog";
import { useRouter } from "next/navigation";

const QuizCardComponent = ({
  id,
  creatorId,
  CreatorUsername,
  title,
  description,
  imageUrl,
  difficulty,
  
}: QuizCardModel) => {
  const [difficultyColor, setDifficultyColor] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    switch (difficulty) {
      case "Easy":
        setDifficultyColor("text-green-500");
        break;
      case "Medium":
        setDifficultyColor("text-yellow-500");
        break;
      case "Hard":
        setDifficultyColor("text-red-500");
        break;
      default:
        setDifficultyColor("text-gray-500");
        break;
    }
  }, []);

  return (
    <>
      <Dialog>
        {/* // These are supposed to go into collumns, so remember to not define width and let them be responsive */}
        <div className="h-[350px] flex flex-col justify-between bg-white rounded-4xl shadow-md relative">
          <img
            src={imageUrl}
            alt="Quiz card image"
            className="h-[60%] w-full object-cover"
          />

          <div className="flex flex-col bg-white justify-between h-[40%]">
            <div className="flex flex-row justify-between items-center p-2">
              <h1 className="text-2xl text-black font-bold text-center">
                {title}
              </h1>
              <p
                className={`text-sm text-gray-500 text-center ${difficultyColor}`}
              >
                {difficulty}
              </p>
            </div>

            <div className="flex justify-between items-center p-2">
              <h3 className="text-black">{`Created By ${CreatorUsername}`}</h3>

              <DialogTrigger asChild>
                <button className="cursor-pointer">Learn More</button>
              </DialogTrigger>
            </div>
          </div>
        </div>
        <DialogContent className="w-[90%] sm:w-[60%] md:w-[40%] lg:w-[40%]  bg-gray-800 rounded-lg shadow-lg">
          <DialogHeader className="mt-3">
            <img
              src={imageUrl}
              alt="Quiz card image"
              className="h-[300px] w-full"
            />

           
            <div className="flex flex-row justify-between items-center">
              <DialogTitle className="">{title}</DialogTitle>
               <p
                className={`text-sm text-gray-500 text-center ${difficultyColor}`}
              >
                {difficulty}
              </p>
            </div>

             
              <DialogDescription>{description}</DialogDescription>
          </DialogHeader>

        <DialogFooter>
          <div className="flex flex-row justify-between items-center w-full">
            {/* MAKE THIS CLICKABLE TO A CREATOR PROFILE ONCE YOU SET THAT UP */}
            <h3 className="text-black">{`Created By ${CreatorUsername}`}</h3>
            <button className="bg-blue-500 rounded-2xl p-1.5" onClick={() => {router.push(`Home/${id}`)}}>Take Quiz</button>
          </div>
        </DialogFooter>

        </DialogContent>
      </Dialog>
    </>
  );
};

export default QuizCardComponent;
