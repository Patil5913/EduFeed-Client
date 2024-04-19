import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Tooltip } from 'recharts';

const dataSem2 = [
  { name: 'Perfect', value: 400 },
  { name: 'Average', value: 300 },
  { name: 'Below Average', value: 300 },
  { name: 'Very Poor', value: 200 },
];

const dataSem4 = [
  { name: 'Perfect', value: 500 },
  { name: 'Average', value: 350 },
  { name: 'Below Average', value: 250 },
  { name: 'Very Poor', value: 150 },
];

const dataSem6 = [
  { name: 'Perfect', value: 450 },
  { name: 'Average', value: 320 },
  { name: 'Below Average', value: 270 },
  { name: 'Very Poor', value: 180 },
];

const dataSem8 = [
  { name: 'Perfect', value: 430 },
  { name: 'Average', value: 310 },
  { name: 'Below Average', value: 290 },
  { name: 'Very Poor', value: 220 },
];

const CustomActiveShapePieChart = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-2xl font-bold mb-4">Authority</h1>
    <div className="w-full border border-gray-500 flex flex-wrap">
      <div className="w-1/2 h-1/2 border-r-2 border-black flex flex-col justify-center items-center">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={dataSem2}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="text-center mt-2 font-bold mb-0">Sem 2</div> 
      </div>
      <div className="w-1/2 h-1/2 flex flex-col justify-center items-center">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={dataSem4}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="text-center mt-2 font-bold mb-0">Sem 4</div> 
      </div>
      <div className="w-1/2 h-1/2 border-t-2 border-r-2 border-black flex flex-col justify-center items-center">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={dataSem6}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="text-center mt-2 font-bold mb-0">Sem 6</div> 
      </div>
      <div className="w-1/2 h-1/2 border-t-2 border-black flex flex-col justify-center items-center">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={dataSem8}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="text-center mt-2 font-bold mb-0">Sem 8</div>
      </div>
    </div>
  </div>
  
  );
};

export default CustomActiveShapePieChart;
