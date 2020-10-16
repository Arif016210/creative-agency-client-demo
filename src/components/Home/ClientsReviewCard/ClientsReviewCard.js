import React from 'react';
import './ClientsReviewCard.css';

const ClientsReviewCard = (props) => {
    const { name, description, img, company } = props.review;
    return (
        <div className="col-md-4 clientsReviewCard-container">
            <div className="clientsReviewCard">
                <img src={img} className="card-img" />
                <h5>{name}</h5>
                <h6> {company} </h6>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ClientsReviewCard;