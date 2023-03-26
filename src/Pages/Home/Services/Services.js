import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div>
            <div className='text-center '>
                <p className="text-2xl text-orange-600 font-bold">Services</p>
                <p className="my-5 text-5xl font-bold">Our Service Area</p>
                <p className='mb-5 text-xl text-gray-500'>We are one of the leading auto repair shops serving customers in Park Avenue.
                    All mechanic services <br />  are performed by highly qualified mechanics.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 justify-items-center'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='flex justify-center'>
                <button className="btn btn-outline btn-warning ">More Services</button>
            </div>
        </div>
    );
};

export default Services;