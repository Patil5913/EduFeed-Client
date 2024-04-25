import React,{useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


const Mentor = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetchData(token);
  }, []);

  const fetchData = async (token) => {
    try {
      const response = await axios.post(
        "https://edufeed-backend.vercel.app/api/getfeedback",
        {
          token
        }
      );
      setData(response.data.selectedOption[0]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const countData = () => {
    const countedData = {};
    data.forEach((item) => {
      countedData[item] = (countedData[item] || 0) + 1;
    });
    return countedData;
  };
  const labelMap = {
    1: "Strongly Disagree",
    2: "Disagree",
    3: "Neutral",
    4: "Agree",
    5: "Strongly Agree"
  };

  const countedData = countData();

  // Transform counted data into format suitable for Recharts
  const chartData = Object.keys(countedData).map(key => ({
    name: labelMap[key],
    count: countedData[key]
  }));

  return (
    <div className="p-4 md:p-6 overflow-hidden ">
      <h1 className="text-center text-5xl md:text-6xl font-bold mb-4 font-space">
        Mentor
      </h1>
      <div className="flex-grow p-6 overflow-auto bg-gray-200 items-center flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full md:w-3/4 xl:w-1/2">
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
      <div className="w-full md:w-3/4 xl:w-1/2 mx-auto">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count"  barSize={20} fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Mentor;

// {
//   "selectedOption": [
//       [
//           "1",
//           "5",
//           "5",
//           "5",
//           "5",
//           "5",
//           "5",
//           "5",
//           "5",
//           "5",
//           "5",
//           "5",
//           "5",
//           "5",
//           "5",
//           "5",
//           "5",
//           "5",
//           "5",
//           "5",
//           "5",
//           "5",
//           "5",
//           "5",
//           "5",
//           "5",
//           "5",
//           "5",
//           "5",
//           "5",
//           "5",
//           "5",
//           "5",
//           "5",
//           "5",
//           "5",
//           "5",
//           "5",
//           "5",
//           "5"
//       ]
//   ]
// }
