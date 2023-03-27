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
                    <h1 className="my-5 text-5xl font-bold">We are qualified <br /> & experienced <br /> in this field</h1>
                    <p className="py-5 text-xl">We have invested in all the latest specialist tools and diagnostic software that is specifically tailored for the software in your vehicle.If you want the quality you would expect from the dealership, but with a more personal and friendly atmosphere, you have found it. </p>
                    <p className="mb-7 text-xl">Our auto repair shop is capable of servicing a variety of models. We only do the work that is needed to fix your problem.</p>
                    <button className="btn border-0 bg-orange-600 hover:bg-orange-600 normal-case">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;