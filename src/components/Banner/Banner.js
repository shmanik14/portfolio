import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import sahadat from '../../images/sahadat.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <Container>
                <Row className="justify-content-between align-items-center">
                    <Col xs={12} md={6}>
                        <div className="banner-img">
                            <img className="avatar img-fluid" src={sahadat} alt="Portfolio Avatar"/>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="banner-content">
                            <span>Hello, I'm</span>
                            <h1>Sahadat Hossain</h1>
                            <p>Creative Photographer based in New York and happy to travel all over Europe to capture photos.</p>
                            <a href="https://drive.google.com/uc?export=download&id=1w_rr1HxcvpepmOXEDdeyL582rNLIgjP3" className="btn prt-btn">Download Resume</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;