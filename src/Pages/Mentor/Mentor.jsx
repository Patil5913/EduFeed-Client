import React from "react";
import { NavLink } from "react-router-dom";
const Mentor = () => {
  return (
    <div className="p-4 md:p-6 overflow-hidden ">
    <h1 className="text-center text-5xl md:text-6xl font-bold mb-4 font-space">
      Mentor
    </h1>
    <div className="flex-grow p-6 overflow-auto bg-gray-200 items-center flex justify-center">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-3/4 xl:w-1/2">
        <NavLink
          to="/register"
          className="h-24 border-2 border-gray-300 rounded-3xl flex items-center p-4 md:p-6"
        >
          <div className="w-12 h-12 md:w-20 md:h-16 border-2 rounded-full flex justify-center items-center">
            <i className="ri-draft-fill ri-xl"></i>
          </div>
          <p className="md:w-full ml-2 text-lg md:text-2xl flex justify-center items-center font-semibold">
            Register
          </p>
        </NavLink>
        <NavLink to="/addquestion">
          <div className="h-24 border-2 border-gray-300 rounded-3xl p-4 md:p-6 flex items-center">
            <div className="w-12 h-12 md:w-20 md:h-16 border-2 rounded-full flex justify-center items-center ">
              <i className="ri-contacts-book-upload-fill ri-xl"></i>
            </div>
            <p className="md:w-full ml-2 text-lg md:text-xl flex justify-center items-center font-semibold">
              Add Question
            </p>
          </div>
        </NavLink>
      </div>
    </div>
    <div className="w-full h-[15rem]  flex justify-center items-center text-2xl font-bold bg-green">
      graph
    </div>
  </div>
  )
}

export default Mentor