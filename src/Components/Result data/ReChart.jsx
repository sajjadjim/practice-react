import React from 'react';
import { Line, LineChart } from 'recharts';

const ReChart = ({value}) => {
    // console.log(value)
    return (
        <div>
            <h1>My Name is Jim</h1>
            <LineChart width={500} height={600} dataKey={value}>
<Line dataKey="Math"></Line>
            </LineChart>
        </div>
    );
};

export default ReChart;