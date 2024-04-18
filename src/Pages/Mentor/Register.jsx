import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    prn: "",
    role: "",
    branch: "",
    currentsem: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://edufeed-backend.vercel.app/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.status === 200) {
        const data = await response.json();
        toast.success("User registered successfully!");
        console.log(data);
      }
      else if(response.status === 208) {
        toast.error("User already exists!");
      } 
      else {
        console.error("Registration failed!");
        toast.error("Registration failed!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await fetch("https://edufeed-backend.vercel.app/api/upload", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        console.log("File uploaded successfully");
      } else {
        console.error("Failed to upload file");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className=" w-full  py-2  flex justify-center flex-col items-center">
        <div className="w-full flex flex-col justify-center items-center space-y-4">
          <i class="ri-user-add-fill text-[2rem]"></i>
          <h1 className="text-xl lg:text-2xl font-serif text-quaternary font-bold">
            Register
          </h1>
        </div>
        <form
          action=""
          className="  w-full flex flex-col sm:flex-row justify-center items-center  sm:w-3/4 px-8 pb-5 sm:pb-10 sm:gap-5"
        >
          <div class="  py-8 px-8 text-base leading-6 space-y-6 text-gray-700 sm:text-lg sm:leading-7 w-full sm:px-5 ">
            <div class="relative">
              <input
                onChange={handleChange}
                autocomplete="off"
                id="name"
                name="name"
                type="text"
                class=" bg-transparent peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-xs  text-gray-900 focus:outline-none focus:border-secondary"
                placeholder="name"
              />
              <label
                for="name"
                class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Name
              </label>
            </div>
            <div class="relative">
              <input
                onChange={handleChange}
                autocomplete="off"
                id="prn"
                name="prn"
                type="text"
                class=" bg-transparent peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-xs  text-gray-900 focus:outline-none focus:border-secondary"
                placeholder="prn"
              />
              <label
                for="prn"
                class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Prn.no
              </label>
            </div>
          </div>

          <div class="  sm:pt-14 px-8 text-base leading-6 space-y-6 text-gray-700 sm:text-lg sm:leading-7 w-full sm:px-5 ">
            <div class="relative">
              <input
                onChange={handleChange}
                autocomplete="off"
                id="email"
                name="email"
                type="text"
                class=" bg-transparent peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-xs text-gray-900 focus:outline-none focus:border-secondary"
                placeholder="Email address"
              />
              <label
                for="email"
                class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Email Address
              </label>
            </div>
            <div className="relative">
              <input
                onChange={handleChange}
                autoComplete="off"
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                className="bg-transparent peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-xs text-gray-900 focus:outline-none focus:border-secondary"
                placeholder="Password"
              />
              <label
                htmlFor="password"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Password
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

            <div class="relative inline-flex w-full">
              <svg
                class="w-4 h-3 absolute top-0 right-0 m-4 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 412 232"
              >
                <path
                  d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                  fill="#648299"
                  fill-rule="nonzero"
                />
              </svg>
              <select
                onChange={handleChange}
                id="role"
                name="role"
                class="border-b-2 text-gray-600 h-10  pr-10 bg-transparent hover:border-gray-400 focus:outline-none focus:border-secondary appearance-none w-full"
              >
                <option value="" className="font-bold text-xl">
                  Role
                </option>
                <option value="student">Student</option>
                <option value="mentor">mentor</option>
                <option value="authority">Authority</option>{" "}
              </select>
            </div>
          </div>

          <div class="  py-8 px-8 text-base leading-6 space-y-6 text-gray-700 sm:text-lg sm:leading-7 w-full sm:px-5 ">
            <div class="relative inline-flex w-full">
              <svg
                class="w-4 h-3 absolute top-0 right-0 m-4 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 412 232"
              >
                <path
                  d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                  fill="#648299"
                  fill-rule="nonzero"
                />
              </svg>
              <select
                onChange={handleChange}
                id="branch"
                name="branch"
                class="border-b-2 text-gray-600 h-10  pr-10 bg-transparent hover:border-gray-400 focus:outline-none focus:border-secondary appearance-none w-full"
              >
                <option className="font-bold text-xl ">Branch</option>
                <option>CE</option>
                <option>IT</option>
                <option>AIDS</option>
                <option>ME</option>
                <option>EE</option>
                <option> Civil eng</option>
              </select>
            </div>
            <div class="relative inline-flex w-full">
              <svg
                class="w-4 h-3 absolute top-0 right-0 m-4 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 412 232"
              >
                <path
                  d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                  fill="#648299"
                  fill-rule="nonzero"
                />
              </svg>
              <select
                onChange={handleChange}
                id="currentsem"
                name="currentsem"
                class="border-b-2 text-gray-600 h-10  pr-10 bg-transparent hover:border-gray-400 focus:outline-none focus:border-secondary appearance-none w-full"
              >
                <option className="font-bold"> currentsem</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
              </select>
            </div>
          </div>
        </form>
        <ToastContainer />
        <div className=" sm:w-3/4  items-center justify-between pb-16 sm:pb-0  space-y-4 sm:space-y-0">
          <div className="flex justify-center  w-full ">
            <button
              onClick={handleSubmit}
              className="hover:brightness-110  font-bold py-3 px-6 rounded-full bg-gradient-to-r from-[#E5E3D4] to-[#c3ba76] text-quaternary"
            >
              Submit
            </button>
          </div>

          <div class=" flex justify-end ">
            <div class="relative group">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div class="flex flex-col items-center justify-center py-2 px-2 ">
                  <svg
                    class="w-5 h-5 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span>{" "}
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    Cvv (MAX. 800x400px)
                  </p>
                </div>
                <input onChange={handleUpload} id="dropzone-file" type="file" class="hidden" />
              </label>
              <div class="absolute w-[20rem] bg-tertiary font-bold text-quaternary text-center text-xs rounded-lg py-2 right-0 bottom-full mb-3 opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out">
                <span className=" text-white">Field should contain:-</span>{" "}
                Name, Email, Password, Prn, Branch, Currentsem,Role
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
