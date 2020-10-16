import React from 'react';
import './BrandLogo.css';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';

const BrandLogo = () => {
    return (
        <div className="container" >
            <div className="brand-logo" >
                <div className="row" >

                    <div className="col-md" >
                        <img src={slack} className="slack-img" alt="" />
                    </div>
                    <div className="col-md" >
                        <img src={google} className="google-img" alt="" />
                    </div>
                    <div className="col-md" >
                        <img src={uber} className="uber-img" alt="" />
                    </div>
                    <div className="col-md" >
                        <img src={netflix} className="netflix-img" alt="" />
                    </div>
                    <div className="col-md" >
                        <img src={airbnb} className="airbnb-img" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandLogo;