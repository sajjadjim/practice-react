import React from 'react';

const Link = ({route}) => {
    return (
        <li className='hover:bg-amber-600  px-2 py-1 rounded-lg'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;