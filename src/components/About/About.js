import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faLinkedinIn, faDribbble  } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    return (
        <div className="about" id="about">
            <Container>
                <Row className="justify-content-between align-items-center">
                    <Col xs={12} md={7}>
                        <div className="about-content">
                            <h2 className="name">Sahadat Hossain</h2>
                            <p className="designation">React Developer</p>
                        </div>
                        <div className="about-summary">
                            <p>My name is Sahadat Hossain. I am a React Developer, and I'm very passionate and dedicated to my work.</p>
                            <p>With 1 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design & development process, from discussion and collaboration.</p>
                        </div>
                        <div className="social">
                            <ul>
                                <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faGithub} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                <li><a href="#"><FontAwesomeIcon icon={faDribbble} /></a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} md={5}>
                        <div className="about-img">

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;