import React, { useContext } from 'react';
import './AdminServiceListHeader.css';
import { UserContext } from '../../../../App';
import logo from '../../../../images/logos/logo.png';

const AdminServiceListHeader = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <header>
            <div className="row mb-5" >
                <div className="col-md-3" >
                    <img className="adminServiceHeaderLogo" src={logo} alt="" />
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

export default AdminServiceListHeader;