import React from 'react';
import { Link } from 'react-router-dom';

const ReviewSidebar = () => {
    return (
        <div className="sidebar">
            <ul className="list-unstyle">
                <li>
                    <Link to="/home" >
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/order">
                        <span>Order</span>
                    </Link>
                </li>
                <li>
                    <Link to="/serviceList">
                        <span>Service List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/review" >
                        <span>Review</span>
                    </Link>
                </li>
                <li>
                    <Link to="/adminService">
                        <span>Admin</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default ReviewSidebar;