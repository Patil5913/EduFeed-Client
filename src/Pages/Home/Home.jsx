import React from "react";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import homeanimation from "../../assets/homeimg.json";


const Home = () => {
  return (
    <>
    <div className="py-10 flex h-full  flex-col justify-evenly items-center sm:flex-row  gap-y-5 ">
      <div className="sm:w-1/2  h-full flex items-center ">
        <Player
          src={homeanimation}
          className="lg:w-3/4"
          loop
          autoplay
          speed={3}
        />
      </div>

      <div className=" sm:w-1/2 h-full flex items-center justify-start ">
        <div className=" w-3/4 px-2 mx-10 ">
          <div className=" ">
            <h1 className=" font-space font-semibold lg:text-5xl text-4xl">
              We Need
            </h1>
            <h1 className="font-space font-bold lg:text-6xl text-[38px] text-secondary">
              {" "}
              Your Opinion
            </h1>
          </div>
          <div className="font-para lg:pr-10 mt-5">
            <p className=" ">
              "Your feedback matters! Share thoughts on academics & campus
              life to help us improve. Thank you for shaping our community."
            </p>
          </div>
          <div className="py-3 w-fit mt-10">
            <Link to="/login" className="hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-gradient-to-r from-[#E5E3D4] to-[#c3ba76] text-quaternary"> 
            FeedBack
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Home