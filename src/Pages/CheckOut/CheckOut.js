import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const {title} = useLoaderData();
    // console.log(title)
    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
};

export default CheckOut;