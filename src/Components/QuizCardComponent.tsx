"use client";

import { QuizModel } from "@/utils/Interface";
import React, { useEffect, useState } from "react";

import { DialogDescription, DialogHeader, DialogTitle, Dialog, DialogContent, DialogTrigger  } from "./ui/dialog";

const QuizCardComponent = ({
  id,
  creatorId,
  CreatorUsername,
  title,
  description,
  imageUrl,
  difficulty,
  winScore,
  winMessage,
  loseMessage,
  isDeleted,
  questions,
}: QuizModel) => {
  const [difficultyColor, setDifficultyColor] = useState<string>("");

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
        <DialogContent className="w-[90%] sm:w-[60%] md:w-[40%] lg:w-[30%] xl:w-[20%] bg-white rounded-lg shadow-lg">
          <DialogHeader>
            <img
              src={imageUrl}
              alt="Quiz card image"
              className="h-[300px] w-full"
            />

            <div className=" flex flex-row justify-between items-center">
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default QuizCardComponent;
