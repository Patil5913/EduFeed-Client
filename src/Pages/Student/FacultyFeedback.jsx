import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const FacultyFeedback = () => {
  const [progressColors, setProgressColors] = useState([
    "bg-tertiary",
    "bg-tertiary",
    "bg-tertiary",
    "bg-tertiary",
    "bg-tertiary",
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions = [
    "Question 1: Lorem ipsum dolor sit amet consectetur adipisicing elit?",
    "Question 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
    "Question 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?",
    "Question 4: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur?",
    "Question 5: Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum?",
  ];

  const handleNextButtonClick = () => {
    // Change the color of all progress bars together
    const updatedColors = progressColors.map((color, index) =>
      index <= currentQuestionIndex ? "bg-black" : "bg-tertiary"
    );
    setProgressColors(updatedColors);

    // Move to the next question
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };
  return (
    <>
      <h1 className="text-center  text-3xl font-serif">SUBJECT _NAME_</h1>
      <div className="flex justify-center">
        <div className="md:w-[70%]  border-2 border-solid border-black py-3 px-5 md:px-0 mt-3 rounded-3xl">
          <div className="flex justify-center space-x-4 ">
            {progressColors.map((color, index) => (
              <div
                key={index}
                className={`h-1 w-10  rounded-full bg-black ${color}`}
              ></div>
            ))}
          </div>

          <div className="flex justify-center mt-7 md:px-12 lg:h-[15%] h-fit  ">
            <div className="w-5 h-5 flex mr-5 mt-2">
              <i className="ri-circle-fill"></i>
            </div>
            <p className="md:text-xl w-full font-para font-bold">
              {questions[currentQuestionIndex]}
            </p>
          </div>

          <div className="space-y-5 px-4 sm:px-6 md:px-0 md:ml-24 my-5 ">
            <div className="flex items-center border-2 border-gray-200 dark:border-gray-700 rounded-full px-2 w-full sm:w-3/4 lg:w-[25%] ">
              <input
                id="bordered-radio-1"
                type="radio"
                value=""
                name="bordered-radio"
                className="w-5 h-5 text-black"
              />
              <label
                for="bordered-radio-1"
                className="font-serif uppercase p-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex-1 flex justify-start items-center rounded-full"
              >
                Strongly Agree
              </label>
            </div>

            <div className="flex items-center border-2 border-gray-200 dark:border-gray-700 rounded-full px-2 w-full sm:w-3/4 lg:w-[25%]">
              <input
                id="bordered-radio-1"
                type="radio"
                value=""
                name="bordered-radio"
                className="w-5 h-5 text-black"
              />
              <label
                for="bordered-radio-1"
                className="font-serif uppercase p-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex-1 flex justify-start items-center rounded-full"
              >
               Agree
              </label>
            </div>

            <div className="flex items-center border-2 border-gray-200 dark:border-gray-700 rounded-full px-2 w-full sm:w-3/4 lg:w-[25%]">
              <input
                id="bordered-radio-1"
                type="radio"
                value=""
                name="bordered-radio"
                className="w-5 h-5 text-black"
              />
              <label
                for="bordered-radio-1"
                className="font-serif uppercase p-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex-1 flex justify-start items-center rounded-full"
              >
               Disagree
              </label>
            </div>

            <div className="flex items-center border-2 border-gray-200 dark:border-gray-700 rounded-full px-2 w-full sm:w-3/4 lg:w-[25%]">
              <input
                id="bordered-radio-1"
                type="radio"
                value=""
                name="bordered-radio"
                className="w-5 h-5 text-black"
              />
              <label
                for="bordered-radio-1"
                className="font-serif uppercase p-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex-1 flex justify-start items-center rounded-full"
              >
               Strongly Disagree
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="mt-2 flex justify-end w-[70%] space-x-6">
          <Link
            to=""
            className="hover:brightness-110  font-bold py-3 px-6 rounded-full bg-gradient-to-r from-[#E5E3D4] to-[#c3ba76] text-quaternary"
          >
            Submit
          </Link>

          <Link
            to=""
            onClick={handleNextButtonClick}
            className="hover:brightness-110  font-bold py-3 px-8 rounded-full bg-gradient-to-r from-[#E5E3D4] to-[#c3ba76] text-quaternary"
          >
            Next
          </Link>
        </div>
      </div>
    </>
  );
};

export default FacultyFeedback;
