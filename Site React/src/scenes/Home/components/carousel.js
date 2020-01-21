import React, { Component } from 'react';
import '../../../App.css';
import Img1 from './img/promotion.jpg';
import Img2 from './img/téléviseur.jpg';
import Img3 from './img/informatique.jpg';
import Img4 from './img/jeux-videos.jpg';
import Img5 from './img/smartphones.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class DemoCarousel extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Carousel  autoPlay={true} infiniteLoop={true} dynamicHeight={true} interval={4000} showIndicators={false} showThumbs={false} showStatus={false} className="Carousel">
                    <div><Link to="/promotions" className="Carousel-img"><img src={Img1} /></Link></div>
                    <div><Link to="/téléviseurs" className="Carousel-img"><img src={Img2} /></Link></div>
                    <div><Link to="/informatique" className="Carousel-img"><img src={Img3} /></Link></div>
                    <div><Link to="/jeux-vidéos" className="Carousel-img"><img src={Img4} /></Link></div>
                    <div><Link to="téléphonie" className="Carousel-img"><img src={Img5} /></Link></div>
                </Carousel>
            </div>
        );
    }
}

export default DemoCarousel;