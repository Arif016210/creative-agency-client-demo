import React, { useContext } from 'react';
import './OrderForm.css';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../../App';

const OrderForm = () => {
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const onSubmit = data => {
        const orderdetails = { ...loggedInUser, ...data, orderTime: new Date() };
        fetch('https://tranquil-river-24454.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderdetails)

        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Order added successfully');
                }
            })
    };




    return (
        <div className="orderForm-container" >
            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name/Company Name" className="form-control" />
                    {errors.name && <span className="text-danger">This field is required</span>}

                </div>

                <div className="form-group">
                    <input type="text" defaultValue={loggedInUser.email} ref={register({ required: true })} name="email" placeholder="Your email address" className="form-control" />
                    {errors.email && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group">
                    <input type="text" ref={register({ required: true })} name="project" placeholder="Web Developer" className="form-control" />
                    {errors.email && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group">
                    <textarea type="text" rows="8" ref={register({ required: true })} name="projectInfo" placeholder="Your Project Details" className="form-control" />
                    {errors.email && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group text-right">
                    <button type="submit" className="order-btn">Send</button>
                </div>
            </form>
        </div>
    );
};

export default OrderForm;