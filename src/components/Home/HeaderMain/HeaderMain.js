import React from 'react';
import './HeaderMain.css';
import frame from '../../../images/logos/Frame.png';

const HeaderMain = () => {
    return (
        <div className="HeaderMain-container" >
            <div className="row" >
                <div className="col-md-6 mt-5 " >
                    <h1 className="headline-text" >Let’s Grow Your <br />Brand To The <br />Next Level</h1>
                    <p className="paragraph-text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat</p>
                    <button className="header-btn" >Hire us</button>
                </div>
                <div className="col-md-6" >
                    <img className="img-fluid" src={frame} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;