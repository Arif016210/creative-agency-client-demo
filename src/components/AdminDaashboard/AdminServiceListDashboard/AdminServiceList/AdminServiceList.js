import React from 'react';
import AdminServiceListBody from '../AdminServiceListBody/AdminServiceListBody';
import AdminServiceListHeader from '../AdminServiceListHeader/AdminServiceListHeader';
import AdminServiceListSidebar from '../AdminServiceListSidebar/AdminServiceListSidebar';
import './AdminServiceList.css';

const AdminServiceList = () => {
    return (
        <div className="container" >
            <div>
                <AdminServiceListHeader></AdminServiceListHeader>
            </div>
            <div className="row" >
                <div className="col-md-3">
                    <AdminServiceListSidebar></AdminServiceListSidebar>
                </div>
                <div className="col-md-9">
                    <AdminServiceListBody></AdminServiceListBody>
                </div>
            </div>
        </div>
    );
};

export default AdminServiceList;