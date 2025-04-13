import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({marksPromiseSend}) => {
    const marksAll = use(marksPromiseSend)
    const marks = marksAll.data;
    // console.log(marks)
    const markStudent = marks.map(markStudent =>{
        const student ={
            name :markStudent.name,
            id :markStudent.id,
            chemistry : markStudent.marks.chemistry,
            math : markStudent.marks.math1,
            bangla :markStudent.marks.bangla,
            higherMath : markStudent.marks.math2
        }
        const avarage= (student.chemistry + student.bangla + student.math + student.higherMath) / 4;
         student.avarage = avarage;
        return student ;
    })
    console.log(markStudent)
    
    return (
        <div>
            <BarChart width={1000}
          height={600}
          data={markStudent}>
<XAxis dataKey="name">
</XAxis>
<YAxis></YAxis>
<Bar dataKey="chemistry" fill="#8884d8"></Bar>
<Bar dataKey="math" fill="green"></Bar>
<Bar dataKey="avarage" fill="#8884d8"></Bar>
<Bar dataKey="bangla" fill="red"></Bar>
<Bar dataKey="higherMath" fill="purple"></Bar>
            </BarChart>
        </div>
    );
};

export default MarksChart;