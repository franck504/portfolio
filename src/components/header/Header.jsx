import React, { useState, useEffect } from 'react';
import './header.css';
import { useLanguage } from '../../context/LanguageContext';

const Header = () => {
    const { language, toggleLanguage, t } = useLanguage();
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".header");
            if (window.scrollY >= 80) {
                header?.classList.add("scroll-header");
            } else {
                header?.classList.remove("scroll-header");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (navId) => {
        setActiveNav(navId);
        showMenu(false); // Auto-close drawer on mobile
    };

    return (
        <header className="header">
            <nav className="nav container">
                <a href="#home" className="nav__logo">Franck</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a
                                href="#home"
                                onClick={() => handleNavClick("#home")}
                                className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}
                            >
                                <i className="uil uil-estate nav__icon"></i> {t.nav.home}
                            </a>
                        </li>
                        <li className="nav__item">
                            <a
                                href="#about"
                                onClick={() => handleNavClick("#about")}
                                className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}
                            >
                                <i className="uil uil-user nav__icon"></i> {t.nav.about}
                            </a>
                        </li>
                        <li className="nav__item">
                            <a
                                href="#qualification"
                                onClick={() => handleNavClick("#qualification")}
                                className={activeNav === "#qualification" ? "nav__link active-link" : "nav__link"}
                            >
                                <i className="uil uil-award nav__icon"></i> {t.nav.qualification}
                            </a>
                        </li>
                        <li className="nav__item">
                            <a
                                href="#projects"
                                onClick={() => handleNavClick("#projects")}
                                className={activeNav === "#projects" ? "nav__link active-link" : "nav__link"}
                            >
                                <i className="uil uil-briefcase-alt nav__icon"></i> {t.nav.projects}
                            </a>
                        </li>
                        <li className="nav__item">
                            <a
                                href="#skills"
                                onClick={() => handleNavClick("#skills")}
                                className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}
                            >
                                <i className="uil uil-graduation-cap nav__icon"></i> {t.nav.skills}
                            </a>
                        </li>
                        <li className="nav__item">
                            <a
                                href="#services"
                                onClick={() => handleNavClick("#services")}
                                className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}
                            >
                                <i className="uil uil-server-network nav__icon"></i> {t.nav.services}
                            </a>
                        </li>
                        <li className="nav__item">
                            <a
                                href="#contact"
                                onClick={() => handleNavClick("#contact")}
                                className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}
                            >
                                <i className="uil uil-message nav__icon"></i> {t.nav.contact}
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" onClick={() => showMenu(false)}></i>
                </div>

                <div className="nav__actions">
                    <button
                        type="button"
                        onClick={toggleLanguage}
                        className="nav__lang-btn"
                        title={language === 'en' ? 'Passer en Français' : 'Switch to English'}
                        aria-label="Toggle language"
                    >
                        <i className="uil uil-globe"></i>
                        <span className="nav__lang-text">{language === 'en' ? 'FR' : 'EN'}</span>
                    </button>

                    <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                        <i className="uil uil-apps"></i>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;