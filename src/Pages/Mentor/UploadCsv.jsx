import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const UploadCsv = () => {
  const [uploadedFileName, setUploadedFileName] = useState('');
  const [csvFile, setCsvFile] = React.useState(null);

  const handleChange = async (e) => {
    const file = e.target.files[0];
    setCsvFile(file);
    toast.success("File uploaded successfully, press submit to upload users");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('csvFile', csvFile);
      const response = await fetch('https://edufeed-backend.vercel.app/api/uploadcsv', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      console.log(data);
      if (response.status === 201) {
        toast.success("user created successfully");
      } else if (response.status === 208) {
        toast.error("users already exist");
      } else {
        toast.error("please check the file format and try again, file must contain Name, Email, Password, Prn, Branch, Currentsem,Role fields as well as the file should be in csv format");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full py-2 flex justify-center flex-col items-center">
        <div className="w-full flex flex-col justify-center items-center space-y-4">
          <div className="relative group">
            <div className="sm:w-64 sm:h-80 m-20 items-center justify-between pb-16 sm:pb-0 space-y-4 sm:space-y-0">
              <form onSubmit={handleSubmit}>
                <label
                  htmlFor="dropzone-file"
                  id="csvFile"
                  className="flex flex-col items-center justify-center border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="mx-10 my-12">
                    <p className="text-xl text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">{uploadedFileName ? uploadedFileName : 'Click to upload'}</span>{" "}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      CSV (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    onChange={handleChange}
                    type="file"
                    name="csvFile"
                    id="dropzone-file"
                    className="hidden"
                  />
                </label>
                <button
                  type="submit"
                  className="my-5 mx-20 hover:brightness-110 font-bold py-3 px-6 rounded-full bg-gradient-to-r from-[#E5E3D4] to-[#c3ba76] text-quaternary"
                >
                  Submit
                </button>
                <div className="absolute w-[20rem] bg-white font-bold text-quaternary text-center text-xs rounded-lg py-2 right-10 left-10 bottom-full opacity-0 group-hover:opacity-100 transition duration-200 ease-in-out border-dashed border-2">
                  <span className="text-tertiary">Field should contain:-</span> Name, Email, Password,
                  Prn, Branch, Currentsem, Role
                </div>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadCsv;
