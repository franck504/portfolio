
import React from 'react';
import './projects.css';
import { Data } from './Data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const Projects = () => {
  return (
    <section className="projects container__project section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle__project">My few accomplishments</span>

      <Swiper
        className="projects__slider"
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
      >
        {Data.map(({ id, image, title, description, techno }) => (
          <SwiperSlide key={id}>
            <div className="project__card">
              
              <div className="project__content">
                <h3 className="project__title">{title}</h3>
                <p className="project__description">{description}</p>
                <p className="project__techno">
                  <strong>Techno:</strong> {techno.join(', ')}
                </p>
                {/* Button to view in large */}
                <button
                  className="view-button"
                  onClick={() => window.open(image, '_blank')}
                >
                  <i  className='uil uil-external-link-alt view-fullscreen-icon '></i> <p className='full_screen_text'>View in fullScreen</p>
                </button>
              </div>
              <div className="project__image">
                <img src={image} alt={title} className="project__img" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
