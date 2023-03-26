import React from 'react';
import personImage from '../../../assets/images/about_us/person.jpg';
import partsImage from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={personImage} className="w-4/5 h-full rounded-lg shadow-2xl" alt='' />
                    <img src={partsImage} className="w-3/5 right-5 top-1/2 border-8 absolute rounded-lg shadow-2xl" alt='' />
                </div>
                <div className='w-1/2'>
                    <p className='text-2xl text-orange-600 font-bold'>About Us</p>
                    <h1 className="my-5 text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-5 text-xl">There are many variations of passages available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="mb-7 text-xl">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                    <button className="btn border-0 bg-orange-600 hover:bg-orange-600 normal-case">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;