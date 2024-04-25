import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const FacultyFeedback = () => {
  const navigate = useNavigate();
  const [progressColors, setProgressColors] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState(Array(40).fill(null));

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        // Get token from localStorage
        const token = localStorage.getItem("token");

        const response = await axios.post(
          "https://edufeed-backend.vercel.app/api/getquestion",
          { token }
        );
        if (response.status === 208) {
          toast.error("Feedback already submitted!")
          navigate("/student");
        } else {
          const data = response.data;

          // Extract subjects and questions from the API response
          const allSubjects = data.questions.map((subject) => subject.subjects);
          //console.log(allSubjects.length);
          const allQuestions = data.questions.flatMap(
            (subject) => subject.questions
          );

          // Set the subjects, questions, and initialize progressColors
          setSubjects(allSubjects);
          setQuestions(allQuestions);
          setProgressColors(Array(allSubjects.length).fill("bg-tertiary"));
        }
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  const handleNextButtonClick = () => {
    // Move to the next question and reset selected option
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedOption(null);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = option;
    setAnswers(updatedAnswers);
  };

  const isNextDisabled = selectedOption === null;
  const isSubmitDisabled = answers.some((answer) => answer === null);
  const isQuestionsEnd = currentQuestionIndex === questions.length - 1;

  const handleSubmit = async (e) => {
    try {

      console.log("submitting feedback")
      const token = localStorage.getItem("token");
      console.log(answers);

      // Make sure token and answer are both available
      if (!token || !answers) {
        console.error("Token or answer is missing.");
        return;
      }

      // Send the token and answer to the API endpoint
      const response = await axios.post(
        "https://edufeed-backend.vercel.app/api/submitfeedback",
        { token, answers }
      );
      console.log(response)
      if (response.status === 200) {
        toast.success("Feedback submitted successfully!");
        navigate("/student")
      } else if (response.status === 208) {
        toast.error("Feedback already submitted!");
        navigate("/student")
      } else if (response.status === 400) {
        toast.error("Invalid credentials please login again");
        navigate("/login")
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  const getCurrentSubject = () => {
    if (subjects.length === 0) {
      return "";
    }
    const subjectIndex = Math.floor(currentQuestionIndex / 10);
    
    const subject = subjects[0];
    return subject[subjectIndex];
  };

  const optionLabels = [
    "Strongly Disagree",
    "Disagree",
    "Neutral",
    "Agree",
    "Strongly Agree"
  ];

  return (
    <>
      <h1 className="text-center text-3xl font-serif">
        SUBJECT {getCurrentSubject()}
      </h1>
      <div className="flex justify-center">
        <div className="md:w-[70%] border-2 border-solid border-black py-3 px-5 md:px-0 mt-3 rounded-3xl">
          <div className="flex justify-center space-x-4 bg-red-300">
            {progressColors.map((color, index) => (
              <div
                key={index}
                className={`h-1 w-10 rounded-full ${color}`}
              ></div>
            ))}
          </div>

          <div className="flex justify-center mt-7 md:px-12 lg:h-[15%] h-fit ">
            <div className="w-5 h-5 flex mr-5 mt-2">
              <i className="ri-circle-fill"></i>
            </div>
            <p className="md:text-xl w-full font-para font-bold">
              {questions.length > 0 && questions[currentQuestionIndex]}
            </p>
          </div>

          <div className="space-y-3 px-4 sm:px-6 md:px-0 md:ml-24 my-5">
            {optionLabels.map((label, index) => (
              <div
                key={index}
                className={`flex items-center border-2 border-gray-200 dark:border-gray-700 rounded-full px-2 w-full sm:w-3/4 lg:w-[25%] ${
                  selectedOption === index + 1 ? " text-[#c3ba76]" : ""
                }`}
                onClick={() => handleOptionSelect(index + 1)}
              >
                <input
                  type="radio"
                  value={index + 1}
                  name="bordered-radio"
                  className="w-5 h-5 text-black"
                />
                <label className="font-serif uppercase p-3 ml-2 text-xs font-medium flex-1 flex justify-start items-center rounded-full">
                  {label}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-2 ">
        <div className=" w-[70%]   flex justify-end items-center">
          {isQuestionsEnd ? (
            <button
              onClick={handleSubmit}
              disabled={isSubmitDisabled}
              className={`hover:brightness-110 font-bold py-3 px-8 rounded-full bg-gradient-to-r from-[#E5E3D4] to-[#c3ba76] text-quaternary`}
            >
              Submit
            </button>
          ) : (
            <button
              onClick={handleNextButtonClick}
              className={`hover:brightness-110 font-bold py-3 px-8 rounded-full bg-gradient-to-r from-[#E5E3D4] to-[#c3ba76] text-quaternary ${
                isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isNextDisabled}
            >
             
              Next
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default FacultyFeedback;
