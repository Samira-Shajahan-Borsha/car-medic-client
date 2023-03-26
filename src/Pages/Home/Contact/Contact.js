import React from 'react';
import { FaBusinessTime } from "react-icons/fa";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";

const Contact = () => {
    return (
        <section className="footer px-16 py-20 h-64 rounded-xl bg-black text-white my-32 justify-items-center items-center">
            <div className='flex items-center'>
                <FaBusinessTime className='text-4xl mr-5 text-orange-600 '></FaBusinessTime>
                <div>
                    <p className='text-base'>We are open monday-friday</p>
                    <h2 className='font-bold text-2xl'>7:00 am - 9:00 pm</h2>
                </div>
            </div>
            <div className='flex items-center'>
                <BsFillTelephoneForwardFill className='text-4xl mr-5 text-orange-600 '></BsFillTelephoneForwardFill>
                <div>
                    <p className='text-base'>Have a question?</p>
                    <h2 className='font-bold text-2xl'>+2546 251 2658</h2>
                </div>
            </div>
            <div className='flex items-center'>
                <MdLocationPin className='text-4xl mr-5 text-orange-600 '></MdLocationPin>
                <div>
                    <p className='text-base'>We are open monday-friday</p>
                    <h2 className='font-bold text-2xl'>7:00 am - 9:00 pm</h2>
                </div>
            </div>
        </section>
    );
};

export default Contact;