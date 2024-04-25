import React from "react";
import { NavLink } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
        {/* Assuming getIntroOfPage is defined elsewhere */}
        {/* <p className="intro">{getIntroOfPage(label)}</p> */}
        <p className="desc">Anything you want can be displayed here.</p>
      </div>
    );
  }
  return null;
};

const Mentor = () => {
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
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} isAnimationActive={false} />
            <Legend />
            <Bar dataKey="pv" barSize={20} fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Mentor;
