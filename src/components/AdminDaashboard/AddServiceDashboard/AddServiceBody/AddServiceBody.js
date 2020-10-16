import React, { useContext } from 'react';
import './AddServiceBody.css';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../../App';

const AddServiceBody = () => {
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const onSubmit = data => {
        const servicedetails = { ...loggedInUser, ...data, orderTime: new Date() };
        fetch('https://tranquil-river-24454.herokuapp.com/addService', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(servicedetails)

        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Service added successfully');
                }
            })
    };



    return (
        <div className="addServiceForm-container" >
            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input type="text" ref={register({ required: true })} name="title" placeholder="Service title" className="form-control" />
                    {errors.name && <span className="text-danger">This field is required</span>}

                </div>

                <div className="form-group">
                    <textarea type="text" rows="5" ref={register({ required: true })} name="description" placeholder="Your Service description" className="form-control" />
                    {errors.email && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <input type="file" ref={register({ required: true })} name="img" className="form-control" />
                    {errors.email && <span className="text-danger">This field is required</span>}
                </div>
                <div className="form-group text-right">
                    <button type="submit" className="addService-btn">Send</button>
                </div>
            </form>
        </div>
    );
};

export default AddServiceBody;