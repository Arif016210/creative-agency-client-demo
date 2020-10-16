import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
    return (
        <Link to="/order" className="col-md-4 serviceCard-container">
            <div className="card-container">
                <img src={service.img} className="card-img" />
                <h5>{service.title}</h5>
                <p>{service.description}</p>
            </div>
        </Link>
    );
};

export default ServiceCard;