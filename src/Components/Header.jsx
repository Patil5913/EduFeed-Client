import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/blacklogo.svg";

const Header = () => {
  const location = useLocation();

  // Function to determine if login button should be shown
  const shouldShowLoginButton = () => {
    // Assuming the main page is "/" and login page is "/login"
    return !(location.pathname === "/" || location.pathname === "/login" || location.pathname === "/forgot");
  };

  return (
    <header className="mb-1 my-3">
      <div className="container mx-auto flex items-center h-auto max-w-full">
        <a href="/" className="flex items-center justify-center gap-3 px-5">
          <img className="h-[5rem] w-[5rem]" src={Logo} alt="logo" />
          <span className="hidden md:block text-xl ml-2 uppercase font-black text-quaternary">EduFeed</span>
        </a>
        <div className="flex w-full justify-end gap-4">
          {shouldShowLoginButton() ? (
            <Link
              to="/logout"
              className="relative border-2 border-dashed border-quaternary px-4 py-2 lg:px-10 lg:py-3 text-quaternary text-base font-bold overflow-hidden bg-transparent rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#E5E3D4] before:to-[#c3ba76] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/login"
              className="relative border-2 border-dashed border-quaternary px-4 py-2 lg:px-10 lg:py-3 text-quaternary text-base font-bold overflow-hidden bg-transparent rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#E5E3D4] before:to-[#c3ba76] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
