import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

const Header = () => {
    useEffect(() => {
        AOS.init({
            duration : 2000
          });
        AOS.refresh();
      }, []);
    return (
        <header className="header">
            <Container>
                <Navbar collapseOnSelect expand="lg" fixed="top">
                    <Navbar.Brand data-aos="fade-right">Sahadat Hossain</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse data-aos="fade-left" id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#banner">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#skills">Skills</Nav.Link>
                            <Nav.Link href="#projects">Projects</Nav.Link>
                            <Nav.Link href="#blog">Blog</Nav.Link>                         
                            <Nav.Link href="#contact">Contact</Nav.Link>                          
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    );
};

export default Header;