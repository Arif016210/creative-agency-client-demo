import React, { useContext } from 'react';
import { UserContext } from '../../../../App';
import './AddServiceHeader.css';
import logo from '../../../../images/logos/logo.png';

const AddServiceHeader = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <header>
            <div className="row mb-5" >
                <div className="col-md-3" >
                    <img className="addServiceHeaderLogo" src={logo} alt="" />
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

export default AddServiceHeader;