import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    prn: "",
    email: "",
    newpassword: "",
  });
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://edufeed-backend.vercel.app/api/forgotpassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        toast.success("Reset successful!, Please login to continue.");
        navigate("/login");
      } else if(response.status === 404) {
        toast.error("Reset failed! kindly check the credentials");
      }
      else {
        console.error("Reset failed!");
        toast.error("Reset failed!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex-grow w-full my-5 p-8 rounded-lg flex justify-center items-center">
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center w-full sm:w-fit px-8 pb-6"
        >
          <div>
            <i className="ri-spam-fill ri-2x"></i>
          </div>
          <div className="p-3">
            <h1 className="text-xl lg:text-2xl font-serif text-quaternary font-bold">
              Reset Password
            </h1>
          </div>
          <div className="mt-2">
            <p className="text-xs sm:text-sm lg:text-base font-medium">
              Please enter your Email and your Password
            </p>
          </div>
          <div className="py-8 text-base leading-6 space-y-6 text-gray-700 sm:text-lg sm:leading-7 w-full sm:px-5">
            <div className="relative">
              <input
                onChange={handleChange}
                autoComplete="off"
                id="prn"
                name="prn"
                type="text"
                className="bg-primary peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                placeholder="Prn.no"
              />
              <label
                htmlFor="prn"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Prn.no
              </label>
            </div>
            <div className="relative">
              <input
                onChange={handleChange}
                autoComplete="off"
                id="email"
                name="email"
                type="text"
                className="bg-primary peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                placeholder="Email address"
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Email Address
              </label>
            </div>
            <div className="relative">
              <input
                onChange={handleChange}
                autoComplete="off"
                id="newpassword"
                name="newpassword"
                type={showPassword ? "text" : "password"}
                className="bg-primary peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                placeholder="Password"
              />
              <label
                htmlFor="newpassword"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                New Password
              </label>
              {showPassword ? (
                <i
                  className="ri-eye-fill absolute right-0 top-3 transform translate-x-[-0.5rem] cursor-pointer"
                  onClick={togglePasswordVisibility}
                ></i>
              ) : (
                <i
                  className="ri-eye-off-fill absolute right-0 top-3 transform translate-x-[-0.5rem] cursor-pointer"
                  onClick={togglePasswordVisibility}
                ></i>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="hover:brightness-110 font-bold py-3 px-6 rounded-full bg-gradient-to-r from-[#E5E3D4] to-[#c3ba76] text-quaternary"
          >
            Reset
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;
