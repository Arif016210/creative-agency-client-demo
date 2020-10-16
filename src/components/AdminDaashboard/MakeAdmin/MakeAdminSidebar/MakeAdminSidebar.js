import React from 'react';
import { Link } from 'react-router-dom';

const MakeAdminSidebar = () => {
    return (
        <div className="sidebar">
            <ul className="list-unstyle">
                <li>
                    <Link to="/home" >
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/adminService">
                        <span>Service List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addService">
                        <span>Add Service</span>
                    </Link>
                </li>
                <li>
                    <Link to="/makeAdmin">
                        <span>Make Admin</span>
                    </Link>
                </li>

            </ul>
        </div>
    );
};

export default MakeAdminSidebar;