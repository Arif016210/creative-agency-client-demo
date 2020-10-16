import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';


const serviceData = [

    {
        id: '1',
        title: 'Web & Mobile design',
        description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.',
        img: service1,
    },
    {
        id: '2',
        title: 'Graphic design',
        description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out.',
        img: service2,
    },
    {
        id: '3',
        title: 'Web development',
        description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.',
        img: service3,
    },

]

const Services = () => {
    return (
        <section className="container service-container" >
            <div className="service-heading" >
                <h3>Provide awesome <span>services</span> </h3>
            </div>
            <div className="row" >
                {
                    serviceData.map(service => <ServiceCard key={service.id} service={service} ></ServiceCard>)
                }
            </div>
        </section>
    );
};

export default Services;