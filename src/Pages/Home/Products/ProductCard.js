import React from 'react';
import {FaStar} from 'react-icons/fa';

const ProductCard = ({ product }) => {

    const { name, image, price } = product;

    return (
        <div className="card card-compact h-96 w-96 bg-base-100 shadow-xl border-2 border-slate-100">
            <div className='p-6'>
                <figure className='bg-slate-50 py-8 rounded-lg'><img src={image} alt="service" className='rounded-lg w-36' /></figure>
                <div className='flex text-yellow-400 justify-center mt-5'>
                    <FaStar className='w-5'></FaStar>
                    <FaStar className='w-5'></FaStar>
                    <FaStar className='w-5'></FaStar>
                    <FaStar className='w-5'></FaStar>
                    <FaStar className='w-5'></FaStar>
                </div>
                <div className="card-body text-center items-center">
                    <p className="card-title text-center">{name}</p>
                    <p className='text-xl text-orange-600 font-medium mt-0'>Price: ${price.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;