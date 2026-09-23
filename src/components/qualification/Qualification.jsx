import React from 'react'
import "./qualification.css"
import { useLanguage } from '../../context/LanguageContext'

const Qualification = () => {
  const { t } = useLanguage();

  return (
    <section className="qualification section" id='qualification'>
      <h2 className="section__title">{t.qualification.title}</h2>
      <span className="section__subtitle">{t.qualification.subtitle}</span>

      <div className="qualification__container container">

        {/* EXPERIENCE SECTION */}
        <div className="qualification__section">
          <h3 className="qualification__section-title">
            <i className="uil uil-briefcase-alt qualification__section-icon"></i>
            {t.qualification.experienceTab}
          </h3>

          <div className="qualification__content qualification__content-active">
            {t.qualification.experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div className="qualification__data" key={index}>
                  {isEven ? (
                    <>
                      <div>
                        <h3 className="qualification__title">{exp.title}</h3>
                        <span className="qualification__subtitle">{exp.subtitle}</span>
                        <div className="qualification__calender">
                          <i className="uil uil-calender-alt"></i> {exp.date}
                        </div>
                      </div>
                      <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div></div>
                      <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                      </div>
                      <div>
                        <h3 className="qualification__title">{exp.title}</h3>
                        <span className="qualification__subtitle">{exp.subtitle}</span>
                        <div className="qualification__calender">
                          <i className="uil uil-calender-alt"></i> {exp.date}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* EDUCATION SECTION */}
        <div className="qualification__section">
          <h3 className="qualification__section-title">
            <i className="uil uil-graduation-cap qualification__section-icon"></i>
            {t.qualification.educationTab}
          </h3>

          <div className="qualification__content qualification__content-active">
            {t.qualification.education.map((edu, index) => {
              // Education starts with empty div on left (index 0 is inverted)
              const isLeft = index % 2 !== 0;
              return (
                <div className="qualification__data" key={index}>
                  {isLeft ? (
                    <>
                      <div>
                        <h3 className="qualification__title">{edu.title}</h3>
                        <span className="qualification__subtitle">{edu.subtitle}</span>
                        <div className="qualification__calender">
                          <i className="uil uil-calender-alt"></i> {edu.date}
                        </div>
                      </div>
                      <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div></div>
                      <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                      </div>
                      <div>
                        <h3 className="qualification__title">{edu.title}</h3>
                        <span className="qualification__subtitle">{edu.subtitle}</span>
                        <div className="qualification__calender">
                          <i className="uil uil-calender-alt"></i> {edu.date}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Qualification