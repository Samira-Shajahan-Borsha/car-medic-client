import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl h-96">
            <div className='p-6'>
                <figure><img src={img} alt="service" className='rounded-lg' /></figure>
                <div className="card-body mt-5">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions justify-end ">
                        <p className='text-xl text-orange-600 font-medium'>Price: ${price}</p>
                        <Link to={`/checkout/${_id}`}>
                            <button className='text-orange-600 w-4'><FaArrowRight className='text-2xl'></FaArrowRight></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;