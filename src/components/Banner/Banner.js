import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import sahadat from '../../images/sahadat.jpg';
import './Banner.css';


const Banner = () => {
    useEffect(() => {
        AOS.init({
            duration : 2000
          });
        AOS.refresh();
      }, []);
    return (
        <div className="banner" id="banner">
            <Container>
                <Row className="justify-content-between align-items-center">
                    <Col xs={12} md={6}>
                        <div className="banner-img" data-aos="flip-left">
                            <img className="avatar img-fluid" src={sahadat} alt="Portfolio Avatar"/>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="banner-content" data-aos="fade-up">
                            <span className="intro">Hello, I'm</span>
                            <h1>Sahadat Hossain</h1>
                            <p>React Developer</p>
                            <a href="https://drive.google.com/file/d/1Pqc44TECuGyCLfVOr1qdHc1BcJFY5f3f/view?usp=sharing" className="btn prt-btn"><span><FontAwesomeIcon icon={faDownload} /></span> View Resume</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;