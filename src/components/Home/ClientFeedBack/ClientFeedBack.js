import React from 'react';
import './ClientFeedBack.css';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';
import FeedBackCard from '../FeedBackCard/FeedBackCard';

const clientFeedBack = [

    {
        id: '1',
        name: 'Nash Patrik',
        title: 'CEO, Manpol',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        img: customer1,
    },
    {
        id: '2',
        name: 'Miriam Barron',
        title: 'CEO, Manpol',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        img: customer2,
    },
    {
        id: '3',
        name: 'Bria Malone',
        title: 'CEO, Manpol',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ',
        img: customer3,
    },

]
const ClientFeedBack = () => {
    return (
        <section className="container clientFeedBack-container" >
            <div className="clientFeedBack-heading" >
                <h3>Clients <span>FeedBack</span> </h3>
            </div>
            <div className="row" >
                {
                    clientFeedBack.map(client => <FeedBackCard key={client.id} client={client} ></FeedBackCard>)
                }
            </div>
        </section>
    );
};

export default ClientFeedBack;