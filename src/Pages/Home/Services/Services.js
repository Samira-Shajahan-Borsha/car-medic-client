import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);

    const [isAsc, setIsAsc] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/services?order=${isAsc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [isAsc]);

    return (
        <div>
            <div className='text-center '>
                <p className="text-2xl text-orange-600 font-bold">Services</p>
                <p className="my-5 text-5xl font-bold">Our Service Area</p>
                <p className='mb-5 text-xl text-gray-500'>We offer a full range of garage services to vehicle owners located in Park Avenue.
                    Our professinals know <br /> how to handle a wide range of car services.</p>
                <button
                    onClick={() => setIsAsc(!isAsc)}
                    className='btn btn-ghost'>{`${isAsc ? 'desc' : 'asc'}`}</button>
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