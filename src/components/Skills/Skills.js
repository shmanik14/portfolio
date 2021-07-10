import { faCss3Alt, faHtml5, faJs, faNodeJs, faReact, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './Skills.module.css';


const Skills = () => {
    useEffect(() => {
        AOS.init({
            duration : 2000
          });
        AOS.refresh();
      }, []);
    return (
        <div className={styles.skills}>
            <Container>
                <div className={styles.section_title} data-aos="fade-up-left">
                    <h2>Skills</h2>
                </div>
                <Row className="justify-content-between align-items-center">
                    <Col xs={6} md={2}>
                        <div className={styles.sin_skill} data-aos="flip-up">
                            <span><FontAwesomeIcon icon={faHtml5} /></span>
                            <p>HTML5</p>
                        </div>
                    </Col>
                    <Col xs={6} md={2}>
                        <div className={styles.sin_skill} data-aos="flip-up">
                            <span><FontAwesomeIcon icon={faCss3Alt} /></span>
                            <p>CSS3</p>
                        </div>
                    </Col><Col xs={6} md={2}>
                        <div className={styles.sin_skill} data-aos="flip-up">
                            <span><FontAwesomeIcon icon={faJs} /></span>
                            <p>Javascript</p>
                        </div>
                    </Col><Col xs={6} md={2}>
                        <div className={styles.sin_skill} data-aos="flip-up">
                            <span><FontAwesomeIcon icon={faJs} /></span>
                            <p>ES6</p>
                        </div>
                    </Col><Col xs={6} md={2}>
                        <div className={styles.sin_skill} data-aos="flip-up">
                            <span><FontAwesomeIcon icon={faReact} /></span>
                            <p>React JS</p>
                        </div>
                    </Col><Col xs={6} md={2}>
                        <div className={styles.sin_skill} data-aos="flip-up">
                            <span><FontAwesomeIcon icon={faReact} /></span>
                            <p>Material UI</p>
                        </div>
                    </Col>
                    <Col xs={6} md={2}>
                        <div className={styles.sin_skill} data-aos="flip-up">
                            <span><FontAwesomeIcon icon={faNodeJs} /></span>
                            <p>Node JS</p>
                        </div>
                    </Col>
                    <Col xs={6} md={2}>
                        <div className={styles.sin_skill} data-aos="flip-up">
                            <span><FontAwesomeIcon icon={faNodeJs} /></span>
                            <p>Express JS</p>
                        </div>
                    </Col>
                    <Col xs={6} md={2}>
                        <div className={styles.sin_skill} data-aos="flip-up">
                            <span><FontAwesomeIcon icon={faReact} /></span>
                            <p>Mongo DB</p>
                        </div>
                    </Col>
                    <Col xs={6} md={2}>
                        <div className={styles.sin_skill} data-aos="flip-up">
                            <span><FontAwesomeIcon icon={faReact} /></span>
                            <p>Firebase</p>
                        </div>
                    </Col>
                    <Col xs={6} md={2}>
                        <div className={styles.sin_skill} data-aos="flip-up">
                            <span><FontAwesomeIcon icon={faReact} /></span>
                            <p>React Router</p>
                        </div>
                    </Col>
                    <Col xs={6} md={2}>
                        <div className={styles.sin_skill} data-aos="flip-up">
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