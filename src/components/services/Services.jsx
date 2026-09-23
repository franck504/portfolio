import React, { useState } from 'react'
import './services.css'
import { useLanguage } from '../../context/LanguageContext'

const Services = () => {
  const { t } = useLanguage();
  const [activeModal, setActiveModal] = useState(0);

  const toggleTab = (index) => {
    setActiveModal(index);
  }

  return (
    <section className="services section" id="services">
      <h2 className="section__title">{t.services.title}</h2>
      <span className="section__subtitle">{t.services.subtitle}</span>

      <div className="services__container container grid">
        {t.services.list.map((service) => (
          <div className="services__content" key={service.id}>
            <div>
              <i className={`${service.icon} services__icon`}></i>
              <h3 className="services__title">{service.title}</h3>

              <span className="services__button" onClick={() => toggleTab(service.id)}>
                {t.services.viewMore}
                <i className="uil uil-arrow-right services__button-icon"></i>
              </span>

              <div className={activeModal === service.id ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                  <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                  <h3 className="services__modal-title">{service.modalTitle}</h3>
                  <p className="services__modal-description">
                    {service.description}
                  </p>

                  <ul className="services__modal-services grid">
                    {service.services.map((item, index) => (
                      <li className="services__modal-service" key={index}>
                        <i className="uil uil-check-circle services__modal-icon"></i>
                        <p className="services__modal-info">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services