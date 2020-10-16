import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AdminServiceCard from '../AdminServiceCard/AdminServiceCard';
import './AdminService.css';

const AdminService = () => {
    const [addService, setAddService] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://tranquil-river-24454.herokuapp.com/service?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setAddService(data))
    }, [])
    return (
        <div className="container" >

            <div className="row" >
                {
                    addService.map(addService => <AdminServiceCard addService={addService} ></AdminServiceCard>)
                }
            </div>
        </div>
    );
};

export default AdminService;