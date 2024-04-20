import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";


function AddQuestion() {
  const [subjects, setSubjects] = useState(Array(7).fill("")); 
  const [questions, setQuestions] = useState(Array(70).fill("")); 
  const [currentSubjectIndex, setCurrentSubjectIndex] = useState(0);
  const [error, setError] = useState("");
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  const handleAddSubject = () => {

    if (subjects.length >= 7) {
      setError("Cannot add more than 7 subjects");
    } else {
      setError("");
      setSubjects([...subjects, ""]);
    }
  };

  const handleAddQuestion = () => {
    if (currentSubjectIndex >= subjects.length - 1) {
      setError("You have reached the maximum number of subjects");
    } else {
      setCurrentSubjectIndex(currentSubjectIndex + 1);
    }
  };

  const handleChangeSubject = (e, i) => {
    const subjectData = [...subjects];
    subjectData[i] = e.target.value;
    setSubjects(subjectData);
  };

  const handleChangeQuestion = (e, i) => {
    const questionData = [...questions];
    const questionIndex = currentSubjectIndex * 10 + i;
    questionData[questionIndex] = e.target.value;
    setQuestions(questionData);
  };

  const handleSubmit = async () => {
    const allFilled = questions.every((value) => value.trim() !== "");
    setAllFieldsFilled(allFilled);
    if(!(subjects.length<=7 && subjects.length>=5)&&(questions.length!=subjects.length*10)){
      setError("Please fill out all questions");
    }
    else {
      setError("");
  
      try {
        const token = localStorage.getItem("token"); 
      
        const response = await fetch("https://edufeed-backend.vercel.app/api/submitquestion", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ token, subjects, questions }),
        });
  
        if (response.status === 200) {
          toast.success("Questions submitted successfully" )
          const data = await response.json();
        console.log(data);
        }
        else if(response.status===208){
          toast.error("Questions already submitted for this semester")
        }
        else if(response.status===400){
          toast.error("Please fill out all questions as well as subjects")
        }
      } catch (error) {
        console.error("Error:", error.message);
        toast.error("Error: " + error.message);
      }
    }
  };
  

  return (
    <div className="max-w-md mx-auto my-8 p-4 rounded-2xl border-2">
      {currentSubjectIndex < subjects.length ? (
        <div>
          <h1 className="text-3xl font-serif font-semibold mb-4">
            {`Subject ${currentSubjectIndex + 1}`}
          </h1>
          <input
            className="border-b-2 bg-primary focus:border-blue-500 focus:outline-none rounded py-2 px-4 mb-4 w-full"
            placeholder={`Subject ${currentSubjectIndex + 1}`}
            value={subjects[currentSubjectIndex]}
            onChange={(e) => handleChangeSubject(e, currentSubjectIndex)}
          />
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center mb-4 gap-4">
              <input
                className="border-b-2 bg-primary focus:border-blue-500 focus:outline-none rounded py-2 px-4 mr-2 w-full"
                placeholder={`Question ${i + 1}`}
                value={questions[currentSubjectIndex * 10 + i]}
                onChange={(e) => handleChangeQuestion(e, i)}
              />
            </div>
          ))}
          <div className="flex justify-between">
            <button
              className="bg-red-400 hover:bg-red-700 text-white py-2 px-4 rounded-full"
              onClick={handleAddQuestion}
            >
              Next Subject
            </button>
            <button
              className="hover:brightness-110  font-bold py-3 px-6 rounded-full bg-gradient-to-r from-[#E5E3D4] to-[#c3ba76] text-quaternary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-serif font-semibold mb-4">
            Add Subjects
          </h1>
          <div className="mb-4">
            {subjects.map((subject, i) => (
              <div key={i} className="flex items-center mb-4 gap-4">
                <input
                  className="border-b-2 bg-primary focus:border-blue-500 focus:outline-none rounded py-2 px-4 mr-2 w-full"
                  placeholder={`Subject ${i + 1}`}
                  value={subject}
                  onChange={(e) => handleChangeSubject(e, i)}
                />
              </div>
            ))}
          </div>
          <button
            className="bg-red-400 hover:bg-red-700 text-white py-2 px-4 rounded-full"
            onClick={handleAddSubject}
          >
            Add Subject
          </button>
        </div>
        
      )}
      <ToastContainer />
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
