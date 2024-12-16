import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {

  const [toggleState , setToggleState] = useState(1);
     
  const toggleTab = (index) => {
    setToggleState(index)
  }
  return (
   <section className="qualification section" id='qualification'>
    <h2 className="section__title">Qualification</h2>
    <span className="section__subtitle">My personel journey</span>
    <div className="qualification__container container">
      <div className="qualification__tabs">
        <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
          <i className="uil uil-graduation-cap qualification__icon"></i>Experience 
        </div>

        <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
          <i className="uil uil-briefcase-alt qualification__icon"></i> Education
        </div>
      </div>
      <div className="qualification__sections">
        <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content "}>
       
          <div className="qualification__data">
         
            <div>
              <h3 className="qualification__title"> Agile SCRUM Methodology</h3>
              <span className="qualification__subtitle">Formation Continue AP12 - ESTI</span>
              <div className="qualification__calender"> 
                <i className="uil uil-calender-alt"></i> 2024 November 
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>

          </div>

          <div className="qualification__data">
          <div></div>
          <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div>
              <h3 className="qualification__title">  Bachelor's Degree in Electronic and Computer Engineering</h3>
              <span className="qualification__subtitle">ISSTM - University of Mahajanga</span>
              <div className="qualification__calender">
                <i className="uil uil-calender-alt"></i> 2023 October
              </div>
            </div>

          
          </div>

          <div className="qualification__data">
         


            <div>
              <h3 className="qualification__title"> Training in PITCH and Business Model</h3>
              <span className="qualification__subtitle">NextA - Antananarivo</span>
              <div className="qualification__calender"> 
                <i className="uil uil-calender-alt"></i> August 2022
              </div>
            </div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            
          </div>

          <div className="qualification__data">
            <div></div>
          <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div>
              <h3 className="qualification__title"> UX/UI Design</h3>
              <span className="qualification__subtitle">Orange Digital Center</span>
              <div className="qualification__calender">
                <i className="uil uil-calender-alt"></i> 2021 December 
              </div>
            </div>
           
          </div>

          <div className="qualification__data">
          <div>
              <h3 className="qualification__title"> Baccalauréat C</h3>
              <span className="qualification__subtitle">Lycée Tanambe</span>
              <div className="qualification__calender">
                <i className="uil uil-calender-alt"></i> 2018-2019
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
           
          </div>
        </div>

       {/* // tapany faharoa */}
       <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content "}>
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">
              Entrepreneurship Hackathon</h3>
              <span className="qualification__subtitle">French Embassy: « Ville verte grâce au digital »</span>
              <div className="qualification__calender">
                <i className="uil uil-calender-alt"></i> December 2021
              </div>
            </div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>

          <div className="qualification__data">
            <div></div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>

            <div>
              <h3 className="qualification__title">  Entrepreneurship Hackathon</h3>
              <span className="qualification__subtitle">French Embassy : « Bien-être au travail grâce au digital »</span>
              <div className="qualification__calender">
                <i className="uil uil-calender-alt"></i> Août 2022
              </div>
            </div>
            
          </div>

          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">
              Hackathon: 2nd Place</h3>
              <span className="qualification__subtitle">« Design of a Mobile Social Network Application for Real-Time Photo Editing  (Flutter-Python)»</span>
              <div className="qualification__calender">
                <i className="uil uil-calender-alt"></i>1st Edition Hackathon, Mahajanga
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>

          <div className="qualification__data">
            <div></div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>

            <div>
              <h3 className="qualification__title">Google Developer Group (GDG Mahajanga)</h3>
              <span className="qualification__subtitle">Active Community Member
              </span>
              <div className="qualification__calender">
                <i className="uil uil-calender-alt"></i> Since 2022
              </div>
            </div>
            
          </div>

          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">
              Internship : FullStack Web Developer</h3>
              <span className="qualification__subtitle">React/typescript , MongoDB, NodeJs </span>
              <div className="qualification__calender">
                <i className="uil uil-calender-alt"></i> Express In Code ( February-June 2023 )
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
   </section>
  )
}

export default Qualification