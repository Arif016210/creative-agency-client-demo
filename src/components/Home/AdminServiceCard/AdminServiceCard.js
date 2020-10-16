import React from 'react';
import { Link } from 'react-router-dom';
import './AdminServiceCard.css';

const AdminServiceCard = (props) => {
    const { title, description, img } = props.addService;
    return (
        <Link to="/order" className="col-md-4 addServiceCard-container">
            <div className="addServiceCard">
                <img src={img} className="card-img" />
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </Link>
    );
};

export default AdminServiceCard;