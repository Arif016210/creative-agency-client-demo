import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import ClientsReviewCard from '../ClientsReviewCard/ClientsReviewCard';

const ClientsReview = () => {
    const [review, setReview] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://tranquil-river-24454.herokuapp.com/review?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div className="container" >

            <div className="row" >
                {
                    review.map(review => <ClientsReviewCard review={review} ></ClientsReviewCard>)
                }
            </div>
        </div>
    );
};

export default ClientsReview;