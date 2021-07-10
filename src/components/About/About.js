import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import about from '../../images/s-portfolio.jpg';
import styles from './About.module.css';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration : 2000
          });
        AOS.refresh();
      }, []);
    return (
        <div className={styles.about} id="about">
            <Container>
                <Row className="justify-content-between align-items-center">
                    <Col xs={12} md={7} data-aos="zoom-in">
                        <div className={styles.content}>
                            <h2 className={styles.name}>Sahadat Hossain</h2>
                            <p className={styles.designation}>React Developer</p>
                        </div>
                        <div className={styles.summary}>
                            <p>My name is Sahadat Hossain. I am a React Developer, and I'm very passionate and dedicated to my work.</p>
                            <p>With 1 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design & development process, from discussion and collaboration.</p>
                        </div>
                        <div className={styles.social}>
                            <ul>
                                <li><a href="https://github.com/shmanik14/" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faGithub} /></a></li>
                                <li><a  href="https://www.linkedin.com/in/shmanik14/" target="_blank" rel="noreferrer" ><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} md={5}>
                        <div className={styles.about_img} data-aos="flip-right">
                            <img src={about} alt="About Avatar" className="img-fluid"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;