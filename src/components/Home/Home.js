import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
          <Header></Header>  
          <Banner></Banner>
          <About></About>
          <Skills></Skills>
          <Projects></Projects>
          <Footer></Footer>
        </div>
    );
};

export default Home;