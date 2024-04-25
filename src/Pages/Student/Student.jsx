import React  from "react";
import "remixicon/fonts/remixicon.css";
import { Link } from "react-router-dom";

const Student = () => {

  return (
    <div className=" w-full h-full flex justify-center items-center flex-col my-8">
      <div className=" w-full h-11 flex justify-center items-center">
        <h1 className="font-serif font-bold text-3xl ">FeedBack</h1>
      </div>

      <div className=" mt-5 flex flex-col justify-center items-center px-5 py-5 gap-5 sm:flex-row">
        <div class=" w-[300px] rounded-3xl  overflow-hidden  relative cursor-pointer snap-start shrink-0 py-8 px-6 bg-primary flex flex-col items-center justify-center gap-3 transition-all duration-300 group border-2 border-black">
          <div class=" uppercase text-center  ">
            <p class="text-black font-bold text-2xl font-serif  px-5">
              Academic{" "}
            </p>
            <p className="text-sm font-semibold font-serif"> FeedBack</p>
          </div>

          <div className=" grid space-y-2.5 mt-8  p-2">
            <Link to="/facultyfeedback">
              <div class="flex items-center space-x-4 p-2 rounded-full bg-secondary hover:bg-transparent hover:border-2">
                <span class="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white ">
                  <i class="ri-team-fill ri-xl"></i>
                </span>
                <div className="flex flex-col flex-1">
                  <h3 class="text-sm font-medium">Faculty Feedback</h3>
                </div>
                <i class="ri-arrow-right-s-line ri-lg "></i>
              </div>
            </Link>

            <Link to="/faculty-feedback">
              <div class="flex items-center space-x-4 p-2 rounded-full bg-secondary hover:bg-transparent hover:border-2">
                <span class="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white ">
                  <i class="ri-wifi-off-line ri-xl"></i>
                </span>
                <div className="flex flex-col flex-1  items-center">
                  <h3 class="text-sm font-medium">Facilities</h3>
                </div>
                <i class="ri-arrow-right-s-line ri-lg "></i>
              </div>
            </Link>
          </div>
        </div>
        {/* non-academic */}
        <div class=" w-[300px]  rounded-3xl  overflow-hidden  relative cursor-pointer snap-start shrink-0 py-8 px-6 bg-primary flex flex-col items-center justify-center gap-3 transition-all duration-300 group border-2 border-black">
          <div class=" uppercase text-center  ">
            <p class="text-black font-bold text-2xl font-serif  px-4">
              NON-Academic{" "}
            </p>
            <p className="text-sm font-semibold font-serif"> FeedBack</p>
          </div>

          <div className="  grid space-y-2.5 mt-8 p-2">
            <Link to="">
              <div class="flex items-center space-x-4 p-2 rounded-full bg-secondary hover:bg-transparent hover:border-2">
                <span class="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white text-gray-900">
                  <i class="ri-bus-fill ri-xl"></i>
                </span>
                <div className="flex flex-col flex-1">
                  <h3 class="text-sm font-medium">Transportation</h3>
                </div>
                <i class="ri-arrow-right-s-line ri-lg "></i>
              </div>
            </Link>

            <Link to="">
              <div class="flex items-center space-x-4 p-2 rounded-full bg-secondary hover:bg-transparent hover:border-2">
                <span class="flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-white ">
                  <i class="ri-building-4-line ri-xl"></i>
                </span>
                <div className="flex flex-col flex-1">
                  <h3 class="text-sm font-medium">hostel queries</h3>
                </div>
                <i class="ri-arrow-right-s-line ri-lg "></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
