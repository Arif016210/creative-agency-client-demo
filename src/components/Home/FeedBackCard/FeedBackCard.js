import React, { useEffect, useState } from 'react';
import './FeedBackCard.css'

const FeedBackCard = ({ client }) => {

    return (

        <div className="col-md-4 feedBackCard-container">
            <div className="feedBackCard">
                <img src={client.img} className="card-img" />
                <h5>{client.name}</h5>
                <h6> {client.title} </h6>
                <p>{client.description}</p>
            </div>
        </div>


    );
};

export default FeedBackCard;