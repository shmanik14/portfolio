import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from 'emailjs-com';
import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration : 2000
          });
        AOS.refresh();
      }, []);
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_mi3v6b4', 'template_luya9fm', e.target, 'user_1EJqsyH87pYIxzbhWUGqH')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

    return (
        <div className="contact" id="contact">
            <Container>        
                <div className="section-title" data-aos="fade-up-left">
                    <h2>Contact Me</h2>
                </div>
                <Row>
                <Col xs={12} md={3}></Col>
                <Col xs={12} md={6}>
                    <form data-aos="zoom-in" className="contact-form" onSubmit={sendEmail}>
                        <input className="form-control" type="text" name="name" placeholder="Name"/>
                        <input className="form-control" type="text" name="subject" placeholder="Subject"/>
                        <input className="form-control" type="email" name="email" placeholder="Email" />
                        <textarea className="form-control" name="message"  placeholder="Message"/>
                        <input className="btn sub-btn" type="submit" value="Send" />
                    </form>
                </Col>
                <Col xs={12} md={3}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;