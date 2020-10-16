import React from 'react';

const ServiceListBodyCard = (props) => {
    const { name, projectInfo, project } = props.order;
    return (
        <div className="col-md-6 clientsReviewCard-container">
            <div className="clientsReviewCard">
                <h2>{name}</h2>
                <h4> {project} </h4>
                <p>{projectInfo}</p>
            </div>
        </div>
    );
};

export default ServiceListBodyCard;