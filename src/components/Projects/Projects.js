import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from 'react-bootstrap';

import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css";
import './Projects.css';
import wefix from '../../images/wefix.png';
import paint from '../../images/paint.png';
import rider from '../../images/Chattala Riders.png';
import amuse from '../../images/amusement.png';


import SwiperCore, {EffectCoverflow,Pagination,Autoplay} from 'swiper/core';

SwiperCore.use([EffectCoverflow,Pagination,Autoplay]);

const Projects = () => {
    return (
    <div className="projects" id="projects">
      <Container>
        <div className="section-title">
            <h2>Projects</h2>
        </div>
        <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
          "rotate": 50,
          "stretch": 0,
          "depth": 100,
          "modifier": 1,
          "slideShadows": true
          }}loop={true} autoplay={true} pagination={true} className="mySwiper">
          <SwiperSlide>
            <img src={wefix} alt="Project Avatar" />
            <div className="project-card">
              <div className="project-tech">
                <button className="btn react-btn">React</button>
                <button className="btn node-btn">Node</button>
                <button className="btn mongo-btn">MongoDB</button>
                <button className="btn heroku-btn">Heroku</button>
                <button className="btn firebase-btn">Firebase</button>
              </div>
              <div className="project-detail">
                <h4><a href="https://wefix-4390e.web.app/" target="_blank" rel="noreferrer">WeFix</a></h4>
                <p>WeFix is a computer and mobile repair service provider website.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={paint} alt="Project Avatar" />
            <div className="project-card">
              <div className="project-tech">
                <button className="btn react-btn">React</button>
                <button className="btn node-btn">Node</button>
                <button className="btn mongo-btn">MongoDB</button>
                <button className="btn heroku-btn">Heroku</button>
                <button className="btn firebase-btn">Firebase</button>
              </div>
              <div className="project-detail">
                <h4><a href="https://paint-17140.web.app/" target="_blank" rel="noreferrer">Painting Precision</a></h4>
                <p>It is a E-commerce website for buy and sell painting.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={rider} alt="Project Avatar" />
            <div className="project-card">
              <div className="project-tech">
                <button className="btn react-btn">React</button>
                <button className="btn react-router">React Router</button>
                <button className="btn node-btn">Node</button>
                <button className="btn firebase-btn">Firebase</button>
              </div>
              <div className="project-detail">
                <h4><a href="https://urban-rider-c4f6f.web.app/" target="_blank" rel="noreferrer">Chattala Rider</a></h4>
                <p>It is simple riders react project with firebase authentication.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={amuse} alt="Project Avatar" />
            <div className="project-card">
              <div className="project-tech">
                <button className="btn react-btn">React</button>
                <button className="btn react-router">React Router</button>
                <button className="btn node-btn">Node</button>
                <button className="btn firebase-btn">Netlify</button>
              </div>
              <div className="project-detail">
                <h4><a href="https://nervous-raman-fb0bfc.netlify.app/" target="_blank" rel="noreferrer">Amusement Madness</a></h4>
                <p>Show data with SportsDB API with dynamic route.</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
    );
};

export default Projects;