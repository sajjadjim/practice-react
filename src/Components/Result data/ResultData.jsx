import React, { use } from 'react';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import ReChart from './ReChart';

const ResultData = ({ResultDataALL}) => {
    const result = use(ResultDataALL)
    console.log(result)
    return (
        
            <div className='grid justify-center my-10'>
                <LineChart  width={1000} height={600} data={result}>
            <Line type="monotone" dataKey="English" stroke="green" />
            <Line type="monotone" dataKey="Chemistry" stroke="#8884d8" />
            <Line type="monotone" dataKey="Math" stroke="red" />
            <CartesianGrid stroke="#ccc"></CartesianGrid>
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
            </LineChart>
            </div>
       
    );
};

export default ResultData;