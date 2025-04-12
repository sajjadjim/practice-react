import React, { use } from 'react';
import CardInfo from './CardInfo';

const DataInformation = ({DataAllCard}) => {

const DataAll = use(DataAllCard)

// console.log(DataAll)
    return (
        <div>
            <h1 className='text-5xl font-bold my-5'>Membership</h1>
            <div className='md:grid grid-cols-2 gap-5'>
            {
DataAll.map((Data)=> <CardInfo key={Data.id} Data={Data}></CardInfo>)
            }
            </div>
        </div>
    );
};

export default DataInformation;