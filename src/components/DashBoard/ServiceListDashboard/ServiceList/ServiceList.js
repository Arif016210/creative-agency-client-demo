import React from 'react';
import ServiceListBody from '../ServiceListBody/ServiceListBody';
import ServiceListHeader from '../ServiceListHeader/ServiceListHeader';
import ServiceListSidebar from '../ServiceListSidebar/ServiceListSidebar';
import './ServiceList.css';

const ServiceList = () => {
    return (
        <div className="container" >
            <div>
                <ServiceListHeader></ServiceListHeader>
            </div>
            <div className="row" >
                <div className="col-md-3">
                    <ServiceListSidebar></ServiceListSidebar>
                </div>
                <div className="col-md-9">
                    <ServiceListBody></ServiceListBody>
                </div>
            </div>
        </div>
    );
};

export default ServiceList
    ;