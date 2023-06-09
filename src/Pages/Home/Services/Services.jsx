import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() =>{
        fetch('Services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className='space-y-4'>
                <h1 className='text-2xl text-orange-500 font-semibold text-center'>service</h1>
                <h1 className='text-5xl text-center font-bold'>Our Service Area</h1>
                <p className='text-2xl text-center'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServiceCard 
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;