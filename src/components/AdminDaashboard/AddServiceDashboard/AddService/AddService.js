import React from 'react';
import AddServiceBody from '../AddServiceBody/AddServiceBody';
import AddServiceHeader from '../AddServiceHeader/AddServiceHeader';
import AddServiceSidebar from '../AddServiceSidebar/AddServiceSidebar';
import './AddService.css';

const AddService = () => {
    return (
        <div className="container" >
            <div>
                <AddServiceHeader></AddServiceHeader>
            </div>
            <div className="row" >
                <div className="col-md-3">
                    <AddServiceSidebar></AddServiceSidebar>
                </div>
                <div className="col-md-9">
                    <AddServiceBody></AddServiceBody>
                </div>
            </div>
        </div>
    );
};

export default AddService;