import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faWordpress } from '@fortawesome/free-brands-svg-icons';


const Skills = () => {
    return (
        <div className="skills" id="skills">
            <Container>
                <div className="section-title">
                    <h2>Skills</h2>
                </div>
                <Row className="justify-content-between align-items-center">
                    <Col xs={6} md={2}>
                        <div className="sin-skill">
                            <span><FontAwesomeIcon icon={faHtml5} /></span>
                            <p>HTML5</p>
                        </div>
                    </Col>
                    <Col xs={6} md={2}>
                        <div className="sin-skill">
                            <span><FontAwesomeIcon icon={faCss3Alt} /></span>
                            <p>CSS3</p>
                        </div>
                    </Col><Col xs={6} md={2}>
                        <div className="sin-skill">
                            <span><FontAwesomeIcon icon={faJs} /></span>
                            <p>Javascript</p>
                        </div>
                    </Col><Col xs={6} md={2}>
                        <div className="sin-skill">
                            <span><FontAwesomeIcon icon={faJs} /></span>
                            <p>ES6</p>
                        </div>
                    </Col><Col xs={6} md={2}>
                        <div className="sin-skill">
                            <span><FontAwesomeIcon icon={faReact} /></span>
                            <p>React JS</p>
                        </div>
                    </Col><Col xs={6} md={2}>
                        <div className="sin-skill">
                            <span><FontAwesomeIcon icon={faReact} /></span>
                            <p>Material UI</p>
                        </div>
                    </Col>
                    <Col xs={6} md={2}>
                        <div className="sin-skill">
                            <span><FontAwesomeIcon icon={faNodeJs} /></span>
                            <p>Node JS</p>
                        </div>
                    </Col>
                    <Col xs={6} md={2}>
                        <div className="sin-skill">
                            <span><FontAwesomeIcon icon={faNodeJs} /></span>
                            <p>Express JS</p>
                        </div>
                    </Col>
                    <Col xs={6} md={2}>
                        <div className="sin-skill">
                            <span><FontAwesomeIcon icon={faReact} /></span>
                            <p>Mongo DB</p>
                        </div>
                    </Col>
                    <Col xs={6} md={2}>
                        <div className="sin-skill">
                            <span><FontAwesomeIcon icon={faReact} /></span>
                            <p>Firebase</p>
                        </div>
                    </Col>
                    <Col xs={6} md={2}>
                        <div className="sin-skill">
                            <span><FontAwesomeIcon icon={faReact} /></span>
                            <p>React Router</p>
                        </div>
                    </Col>
                    <Col xs={6} md={2}>
                        <div className="sin-skill">
                            <span><FontAwesomeIcon icon={faWordpress} /></span>
                            <p>WordPress</p>
                        </div>
                    </Col>
                    {/* <Col xs={12} md={6}>
                        <div className="skill-content">
                            
                            <div className="single-skill">
                                <div className="progress-lavel">
                                    <p className="label-name">HTML</p>
                                    <p className="label-percent">90%</p>
                                </div>
                                <ProgressBar now={90} />
                            </div>
                        </div>
                    </Col> */}
                </Row>
            </Container>
        </div>
    );
};

export default Skills;