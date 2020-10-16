import React, { useContext } from 'react';
import './ReviewForm.css';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../../App';

const ReviewForm = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {

        const reviewdetails = { ...loggedInUser, ...data, reviewTime: new Date() };

        fetch('https://tranquil-river-24454.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reviewdetails)

        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Review added successfully');
                }
            })


    };



    return (
        <div className="reviewForm-container" >
            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                    {errors.name && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <input type="text" defaultValue={loggedInUser.email} ref={register({ required: true })} name="email" placeholder="Your email" className="form-control" />
                    {errors.name && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <input type="text" ref={register({ required: true })} name="company" placeholder="Company’s name, Designation" className="form-control" />
                    {errors.name && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <textarea type="text" rows="8" ref={register({ required: true })} name="description" placeholder="Description" className="form-control" />
                    {errors.email && <span className="text-danger">This field is required</span>}
                </div>

                <div className="form-group">
                    <input type="file" ref={register({ required: true })} name="img" className="form-control" />
                    {errors.name && <span className="text-danger">This field is required</span>}
                </div>


                <div className="form-group text-right">
                    <button type="submit" className="review-btn">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ReviewForm;