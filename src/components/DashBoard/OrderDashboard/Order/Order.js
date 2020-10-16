import React from 'react';
import OrderForm from '../OrderForm/OrderForm';
import OrderHeader from '../OrderHeader/OrderHeader';
import OrderSidebar from '../OrderSidebar/OrderSidebar';

const Order = () => {
    return (
        <div className="container" >
            <div>
                <OrderHeader></OrderHeader>
            </div>
            <div className="row" >
                <div className="col-md-3">
                    <OrderSidebar></OrderSidebar>
                </div>
                <div className="col-md-9">
                    <OrderForm></OrderForm>
                </div>
            </div>
        </div>
    );
};

export default Order;