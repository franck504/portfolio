import React from 'react'
import { useLanguage } from '../../context/LanguageContext'

const Info = () => {
  const { t } = useLanguage();

  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">{t.about.expTitle}</h3>
        <span className="about__subtitle">{t.about.expSubtitle}</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">{t.about.projectsTitle}</h3>
        <span className="about__subtitle">{t.about.projectsSubtitle}</span>
      </div>

      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">{t.about.supportTitle}</h3>
        <span className="about__subtitle">{t.about.supportSubtitle}</span>
      </div>
    </div>
  )
}

export default Info