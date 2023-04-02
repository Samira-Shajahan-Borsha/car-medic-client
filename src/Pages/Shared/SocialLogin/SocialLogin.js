import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
const SocialLogin = () => {
    return (
        <div className='text-center mt-2 mb-6'>
            
            <div className='flex justify-evenly w-1/2 mx-auto'>
                <p className='btn btn-ghost bg-gray-200 rounded-full'><FaGoogle></FaGoogle></p>
                <p className='btn btn-ghost bg-gray-200 rounded-full'><FaLinkedin></FaLinkedin></p>
                <p className='btn btn-ghost bg-gray-200 rounded-full'><FaFacebook></FaFacebook></p>
            </div>
        </div>
    );
};

export default SocialLogin;