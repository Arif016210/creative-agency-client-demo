import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import ServiceListBodyCard from '../ServiceListBodyCard/ServiceListBodyCard';

const ServiceListBody = () => {
    const [order, setOrder] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://tranquil-river-24454.herokuapp.com/order?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])
    return (
        <div className="container" >
            <h3>Order Count: {order.length} </h3>
            <div className="row" >
                {
                    order.map(order => <ServiceListBodyCard order={order} ></ServiceListBodyCard>)
                }
            </div>
        </div>
    );
};

export default ServiceListBody;