import React from 'react';
import { useForm } from 'react-hook-form';
import './MakeAdminBody.css';

const MakeAdminBody = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        alert('Admin added successfully');
    };
    return (
        <div>
            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group">
                    <input type="text" ref={register({ required: true })} name="email" placeholder="Your email address" className="form-control" />
                    {errors.email && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group text-right">
                    <button type="submit" className="order-btn">Confirm</button>
                </div>
            </form>
        </div>
    );
};

export default MakeAdminBody;