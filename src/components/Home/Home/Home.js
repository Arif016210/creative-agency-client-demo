import React from 'react';
import './Home.css';
import BrandLogo from '../BrandLogo/BrandLogo';
import Header from '../Header/Header';
import Services from '../Services/Services';
import WorkSlider from '../WorkSlider/WorkSlider';
import ClientFeedBack from '../ClientFeedBack/ClientFeedBack';
import Footer from '../Footer/Footer/Footer';
import ClientsReview from '../ClientsReview/ClientsReview';

const Home = () => {
    return (
        <div className="home-container" >
            <Header></Header>
            <BrandLogo></BrandLogo>
            <Services></Services>
            <WorkSlider></WorkSlider>
            <ClientFeedBack></ClientFeedBack>
            <ClientsReview></ClientsReview>
            <Footer></Footer>
        </div>
    );
};

export default Home; 