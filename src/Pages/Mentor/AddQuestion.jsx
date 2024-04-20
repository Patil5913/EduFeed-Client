import React, { useState } from "react";
import { Link } from "react-router-dom";

function AddQuestion() {
  const [val, setVal] = useState(["", "", "", "", ""]); // Initialize with 5 empty strings
  const [error, setError] = useState("");
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  const handleAdd = () => {
    if (val.length >= 7) {
      setError("Cannot add more than 7 input fields");
    } else {
      setError("");
      setVal([...val, ""]);
    }
  };

  const handleChange = (e, i) => {
    const inputdata = [...val];
    inputdata[i] = e.target.value;
    setVal(inputdata);

    // Check if all input fields are filled
    const allFilled = inputdata.every((value) => value.trim() !== "");
    setAllFieldsFilled(allFilled);
  };

  const handleDelete = (i) => {
    setVal(val.filter((_, index) => index !== i));
  };

  const handleSubmit = () => {
    if (!allFieldsFilled) {
      setError("Please fill out all input fields");
    } else {
      setError("");
      console.log(val);
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-4 rounded-2xl border-2 ">
      <div className=" flex justify-between  mb-4 border-b-2 p-2">
        <h1 className=" text-3xl flex justify-center items-center font-serif font-semibold">
          Subject
        </h1>

        <i
          className="ri-add-circle-fill  ri-xl flex items-center  cursor-pointer"
          onClick={handleAdd}
          disabled={val.length >= 7}
        ></i>
      </div>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="mb-4 ">
        {val.map((data, i) => (
          <div key={i} className="flex items-center mb-4 gap-4">
            <input
              className="border-b-2 bg-primary focus:border-blue-500 focus:outline-none rounded py-2 px-4 mr-2 w-full"
              placeholder={`Subject ${i + 1}`}
              value={data}
              onChange={(e) => handleChange(e, i)}
              required
            />
            <button
              className="bg-red-400 hover:bg-red-700 text-white py-2 px-4 rounded-full"
              onClick={() => handleDelete(i)}
            >
              REMOVE
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          to=""
          onClick={handleSubmit}
          className="hover:brightness-110  font-bold py-3 px-6 rounded-full bg-gradient-to-r from-[#E5E3D4] to-[#c3ba76] text-quaternary"
        >
          Next
        </Link>
      </div>
    </div>
  );
}

export default AddQuestion;
  

//import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Question = () => {
  
//     const [val, setVal] = useState(["", "", "", "", "","","","","",""]); // Initialize with 5 empty strings
//     const [error, setError] = useState("");
//     const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  
//     const handleAdd = () => {
//       if (val.length >= 10) {
//         setError("Cannot add more than 10 input fields");
//       } else {
//         setError("");
//         setVal([...val, ""]);
//       }
//     };
  
//     const handleChange = (e, i) => {
//       const inputdata = [...val];
//       inputdata[i] = e.target.value;
//       setVal(inputdata);
  
//       // Check if all input fields are filled
//       const allFilled = inputdata.every((value) => value.trim() !== "");
//       setAllFieldsFilled(allFilled);
//     };
  
//     const handleDelete = (i) => {
//       setVal(val.filter((_, index) => index !== i));
//     };
  
//     const handleSubmit = () => {
//       if (!allFieldsFilled) {
//         setError("Please fill out all input fields");
//       } else {
//         setError("");
//         console.log(val);
//       }
//     };
  
//     return (
//       <div className="w-[60%] mx-auto my-8 p-4 rounded-2xl border-2 ">
//         <div className=" flex justify-between  mb-4 border-b-2 p-2">
//           <h1 className=" text-3xl flex justify-center items-center font-serif font-semibold">
//             Subject_name
//           </h1>
  
//           <i
//             className="ri-add-circle-fill  ri-xl flex items-center  cursor-pointer"
//             onClick={handleAdd}
//             disabled={val.length >= 10}
//           ></i>
//         </div>
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         <div className="mb-4 ">
//           {val.map((data, i) => (
//             <div key={i} className="flex items-center mb-4 gap-4">
//               <input
//                 className="border-b-2 bg-primary focus:border-blue-500 focus:outline-none rounded py-2 px-4 mr-2 w-full"
//                 placeholder={`question ${i + 1}`}
//                 value={data}
//                 onChange={(e) => handleChange(e, i)}
//                 required
//               />
//               <button
//                 className="bg-red-400 hover:bg-red-700 text-white py-2 px-4 rounded-full"
//                 onClick={() => handleDelete(i)}
//               >
//                 REMOVE
//               </button>
//             </div>
//           ))}
//         </div>
//         <div className="flex justify-center">
//           <Link
//             to=""
//             onClick={handleSubmit}
//             className="hover:brightness-110  font-bold py-3 px-6 rounded-full bg-gradient-to-r from-[#E5E3D4] to-[#c3ba76] text-quaternary"
//           >
//             Submit
//           </Link>
//         </div>
//       </div>
//     );
// }

// export default Question
