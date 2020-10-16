import React from 'react';
import MakeAdminBody from '../MakeAdminBody/MakeAdminBody';
import MakeAdminHeader from '../MakeAdminHeader/MakeAdminHeader';
import MakeAdminSidebar from '../MakeAdminSidebar/MakeAdminSidebar';
import './MakeAdmin.css';

const MakeAdmin = () => {
    return (
        <div className="container" >
            <div>
                <MakeAdminHeader></MakeAdminHeader>
            </div>
            <div className="row" >
                <div className="col-md-3">
                    <MakeAdminSidebar></MakeAdminSidebar>
                </div>
                <div className="col-md-9">
                    <MakeAdminBody></MakeAdminBody>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;