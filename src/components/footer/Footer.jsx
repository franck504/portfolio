import React from 'react'
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Franck</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#qualification" className="footer__link">Experience</a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="https://www.facebook.com/franck.anselme.9" className="footer__social-link" target='_blank' rel="noopener noreferrer">
                        <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/" className="footer__social-link" target='_blank' rel="noopener noreferrer">
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="https://x.com/Tsinjoniai8836" className="footer__social-link" target='_blank' rel="noopener noreferrer">
                        <i className="bx bxl-twitter"></i>
                    </a>
                </div>
                <span className='footer__copy'>&#169; 2024-{new Date().getFullYear()} TechCare Consulting. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer