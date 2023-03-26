import React from 'react';
import { RiTeamFill } from 'react-icons/ri';
import { IoMdClock, IoMdSettings } from 'react-icons/io';
import { MdSupportAgent } from 'react-icons/md';
import { BsShieldFillCheck } from 'react-icons/bs';
import { AiOutlineDeliveredProcedure } from 'react-icons/ai';

const Feature = () => {

    const iconClass = 'text-orange-600 w-20 h-14 hover:text-white';

    const features = [
        { id: 1, name: 'Expert Team', icon: <RiTeamFill className={iconClass}></RiTeamFill> },
        { id: 2, name: 'Timely Delivery', icon: <IoMdClock className={iconClass}></IoMdClock> },
        { id: 3, name: '24/7 Support', icon: <MdSupportAgent className={iconClass}></MdSupportAgent> },
        { id: 4, name: '100% Guranty', icon: <BsShieldFillCheck className={iconClass}></BsShieldFillCheck> },
        { id: 5, name: 'Best Equipment', icon: <IoMdSettings className={iconClass}></IoMdSettings> },
        { id: 6, name: 'Timely Delivery', icon: <AiOutlineDeliveredProcedure className={iconClass}></AiOutlineDeliveredProcedure> }
    ];

    return (
        <div className='my-32'>
            <div className='text-center '>
                <p className="text-2xl text-orange-600 font-bold">Core Features</p>
                <p className="my-5 text-5xl font-bold">Why Choose Us</p>
                <p className='mb-12 text-xl text-gray-500'>We are one of the leading auto repair shops serving customers in Tucson.
                    All mechanic services <br /> are performed by highly qualified mechanics.</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm: mb-16 justify-items-center'>
                {
                    features.map(feature =>
                        <div key={feature.id} className='w-44 h-36 flex flex-col justify-evenly items-center border-2 border-slate-100 rounded-lg hover:bg-orange-600'>
                            {feature.icon}
                            <p className='text-lg text-black font-bold'>{feature.name}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Feature;