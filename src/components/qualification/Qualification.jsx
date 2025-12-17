import React from 'react'
import "./qualification.css"

const Qualification = () => {
  return (
    <section className="qualification section" id='qualification'>
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualification__container container">

        {/* EXPERIENCE SECTION */}
        <div className="qualification__section">
          <h3 className="qualification__section-title">
            <i className="uil uil-briefcase-alt qualification__section-icon"></i>
            Experience
          </h3>

          <div className="qualification__content qualification__content-active">
            {/* 1. Freelance - MOST RECENT */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Freelance Developer</h3>
                <span className="qualification__subtitle">Mobile & IoT Development</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> August 2023 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* 2. Internship 2023 */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Internship : FullStack Web Developer</h3>
                <span className="qualification__subtitle">React/typescript , MongoDB, NodeJs </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> Express In Code ( February-June 2023 )
                </div>
              </div>
            </div>

            {/* 3. Entrepreneurship Hackathon August 2022 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Entrepreneurship Hackathon</h3>
                <span className="qualification__subtitle">French Embassy : « Bien-être au travail grâce au digital »</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> Août 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* 4. GDG Mahajanga Since 2022 */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Google Developer Group (GDG Mahajanga)</h3>
                <span className="qualification__subtitle">Active Community Member</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> Since 2022
                </div>
              </div>
            </div>

            {/* 5. Hackathon 2nd Place */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Hackathon: 2nd Place</h3>
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

            {/* 6. Entrepreneurship Hackathon December 2021 - OLDEST */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Entrepreneurship Hackathon</h3>
                <span className="qualification__subtitle">French Embassy: « Ville verte grâce au digital »</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> December 2021
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* EDUCATION SECTION */}
        <div className="qualification__section">
          <h3 className="qualification__section-title">
            <i className="uil uil-graduation-cap qualification__section-icon"></i>
            Education
          </h3>

          <div className="qualification__content qualification__content-active">
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">  Master's Degree in Connected Devices and Cybersecurity , specializing in Artificial Intelligence</h3>
                <span className="qualification__subtitle">ENI - University of Fianarantsoa</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2025 January
                </div>
              </div>


            </div>
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
        </div>

      </div>
    </section>
  )
}

export default Qualification