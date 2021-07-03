import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Container } from 'react-bootstrap';
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import amuse from '../../images/amusement.png';
import rider from '../../images/Chattala Riders.png';
import blog from '../../images/daily-dose-blog.png';
import paint from '../../images/paint.png';
import home from '../../images/Sweet Home.png';
import wefix from '../../images/wefix.png';
import './Projects.css';


SwiperCore.use([EffectCoverflow,Pagination,Autoplay]);

const Projects = () => {
  useEffect(() => {
    AOS.init({
        duration : 2000
      });
    AOS.refresh();
  }, []);
    return (
    <div className="projects" id="projects">
      <Container>
        <div className="section-title" data-aos="fade-up-left">
            <h2>Projects</h2>
        </div>
        <Swiper data-aos="fade-up-left" effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
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
            <img src={blog} alt="Project Avatar" />
            <div className="project-card">
              <div className="project-tech">
                <button className="btn react-btn">React</button>
                <button className="btn node-btn">Node JS</button>
                <button className="btn mongo-btn">MongoDB</button>
                <button className="btn heroku-btn">Tailwindcss</button>
                <button className="btn heroku-btn">Heroku</button>
                <button className="btn firebase-btn">Firebase</button>
              </div>
              <div className="project-detail">
                <h4><a href="https://daily-dose-blog.web.app/" target="_blank" rel="noreferrer">Daily Dose Blog</a></h4>
                <p>It is a Retro themed blog.</p>
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
            <img src={home} alt="Project Avatar" />
            <div className="project-card">
              <div className="project-tech">
                <button className="btn react-btn">React</button>
                <button className="btn react-router">Redux</button>
                <button className="btn react-router">React Router</button>
                <button className="btn node-btn">Node</button>
                <button className="btn firebase-btn">Firebase</button>               
              </div>
              <div className="project-detail">
                <h4><a href="https://apartment-hunt-14.web.app/" target="_blank" rel="noreferrer">Sweet Home</a></h4>
                <p>It is apartment rental website with React JS & Redux.</p>
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