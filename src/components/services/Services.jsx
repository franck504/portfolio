import React, { useState } from 'react'
import './services.css'

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index)
  }
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>
      <div className="services__container container grid">

        <div className="services__content">
          <div>
            <i className="uil uil-mobile-android services__icon"></i>
            <h3 className="services__title"> Mobile  <br />Development </h3>

            <span className="services__button" onClick={() => toggleTab(1)}>View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title"> Mobile Development </h3>
                <p className="services__modal-description">
                  Services with more than 1 year of experience . Providing quality work to clients and companies .
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">I design and develop mobile applications for iOS and Android.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">I implement intuitive and responsive user interfaces.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">I integrate APIs and backend services into mobile apps.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">I optimize app performance for smooth and seamless user experiences.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">I create prototypes and mockups to visualize app concepts.</p>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-database services__icon"></i>
            <h3 className="services__title">Backend<br /> Development</h3>

            <span className="services__button" onClick={() => toggleTab(2)}>View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title"> Backend Development</h3>
                <p className="services__modal-description">
                  Services with more than 1 year of experience . Providing quality work to clients and companies .
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">I design and implement server-side logic and architecture.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">I create and manage APIs for seamless data exchange.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">I ensure data security and optimize application performance.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">I work with databases to store and retrieve data efficiently.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">I collaborate with frontend developers to integrate system components.</p>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-processor services__icon"></i>
            <h3 className="services__title">Embedded <br /> Electronics</h3>

            <span className="services__button" onClick={() => toggleTab(3)}>View More
              <i className="uil uil-arrow-right services__button-icon"></i>
            </span>

            <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                <h3 className="services__modal-title"> Embedded Electronics</h3>
                <p className="services__modal-description">
                  Services with more than 3 years of experience . Providing quality work to clients and companies .
                </p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">I design and develop embedded systems for hardware devices.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">I write and optimize firmware for microcontrollers and processors.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">I integrate sensors, communication modules, and peripherals into systems.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">I perform hardware-software debugging and system optimization.</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">I ensure reliability and performance for real-time embedded applications.</p>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Services