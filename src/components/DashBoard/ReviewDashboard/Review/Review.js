import React from 'react';
import ReviewForm from '../ReviewForm/ReviewForm';
import ReviewHeader from '../ReviewHeader/ReviewHeader';
import ReviewSidebar from '../ReviewSidebar/ReviewSidebar';

const Review = () => {
    return (
        <div className="container" >
            <div>
                <ReviewHeader></ReviewHeader>
            </div>
            <div className="row" >
                <div className="col-md-3">
                    <ReviewSidebar></ReviewSidebar>
                </div>
                <div className="col-md-9">
                    <ReviewForm></ReviewForm>
                </div>
            </div>
        </div>
    );
};

export default Review;