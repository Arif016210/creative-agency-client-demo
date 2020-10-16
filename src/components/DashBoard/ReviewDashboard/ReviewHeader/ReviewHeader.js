import React, { useContext } from 'react';
import './ReviewHeader.css';
import logo from '../../../../images/logos/logo.png';
import { UserContext } from '../../../../App';

const ReviewHeader = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <header>
            <div className="row mb-5" >
                <div className="col-md-3" >
                    <img className="reviewLogo" src={logo} alt="" />
                </div>
                <div className="col-md-6" >
                    <h2>Review</h2>
                </div>
                <div className="col-md-3" >
                    <h3> {loggedInUser.name} </h3>
                </div>
            </div>
        </header>
    );
};

export default ReviewHeader;