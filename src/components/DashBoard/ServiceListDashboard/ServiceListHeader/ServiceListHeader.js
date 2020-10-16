import React, { useContext } from 'react';
import './ServiceListHeader.css';
import logo from '../../../../images/logos/logo.png';
import { UserContext } from '../../../../App';

const ServiceListHeader = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <header>
            <div className="row mb-5" >
                <div className="col-md-3" >
                    <img className="serviceListLogo" src={logo} alt="" />
                </div>
                <div className="col-md-6" >
                    <h2>Order</h2>
                </div>
                <div className="col-md-3" >
                    <h3> {loggedInUser.name} </h3>
                </div>
            </div>
        </header>
    );
};

export default ServiceListHeader;