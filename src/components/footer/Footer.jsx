import React from 'react'
import "./footer.css"
import { useLanguage } from '../../context/LanguageContext'

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Franck</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">{t.footer.about}</a>
                    </li>
                    <li>
                        <a href="#projects" className="footer__link">{t.footer.projects}</a>
                    </li>
                    <li>
                        <a href="#services" className="footer__link">{t.footer.services}</a>
                    </li>
                    <li>
                        <a href="#qualification" className="footer__link">{t.footer.experience}</a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="https://github.com/franck504" className="footer__social-link" target='_blank' rel="noopener noreferrer" aria-label="GitHub">
                        <i className="bx bxl-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/franck-anselme-andriniavo-tsinjoniaina-b37436269" className="footer__social-link" target='_blank' rel="noopener noreferrer" aria-label="LinkedIn">
                        <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="https://www.facebook.com/franck.anselme.9" className="footer__social-link" target='_blank' rel="noopener noreferrer" aria-label="Facebook">
                        <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="https://x.com/Tsinjoniai8836" className="footer__social-link" target='_blank' rel="noopener noreferrer" aria-label="X (Twitter)">
                        <i className="bx bxl-twitter"></i>
                    </a>
                </div>
                <span className='footer__copy'>&#169; 2024-{new Date().getFullYear()} Franck ANDRINIAVO. {t.footer.rights}</span>
            </div>
        </footer>
    )
}

export default Footer