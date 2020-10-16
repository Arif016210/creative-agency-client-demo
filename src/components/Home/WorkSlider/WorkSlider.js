import React from 'react';
import './WorkSlider.css';
import slider1 from '../../../images/slider1.png';
import slider2 from '../../../images/slider2.png';
import slider3 from '../../../images/slider3.png';
import slider4 from '../../../images/slider4.png';
import slider5 from '../../../images/slider5.png';
import slider6 from '../../../images/slider6.png';
import slider7 from '../../../images/slider7.png';

import Carousel from 'react-bootstrap/Carousel'

const WorkSlider = () => {
    return (
        <section className="workSlider-container" >
            <div className="sliderHeading-container" >
                <h3>Here are some of <span>our works</span> </h3>
            </div>


            <Carousel>
                <Carousel.Item>
                    <img className="d-block  slider-img" src={slider1} alt="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block  slider-img" src={slider2} alt="Third slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block  slider-img" src={slider3} alt="Third slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block  slider-img" src={slider4} alt="Third slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block  slider-img" src={slider5} alt="Third slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block  slider-img" src={slider6} alt="Third slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block  slider-img" src={slider7} alt="Third slide" />
                </Carousel.Item>
            </Carousel>

        </section>
    );
};

export default WorkSlider;