import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
          <Header></Header>  
          <Banner></Banner>
          <About></About>
          <Skills></Skills>
          <Projects></Projects>
          <Contact></Contact>
          <Footer></Footer>
        </div>
    );
};

export default Home;