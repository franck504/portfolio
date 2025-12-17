import React from 'react';
import { Link } from 'react-router-dom';
import './404.css';

const NotFound = () => {
    return (
        <div className="notfound-container">
            <div className="notfound-content">
                <h1 className="notfound-title">404</h1>
                <h2 className="notfound-subtitle">Page Not Found</h2>
                <p className="notfound-description">
                    Sorry, the page you are looking for does not exist or has been moved.
                </p>

                <div className="notfound-links">
                    <a href="/#home" className="button button--flex notfound-button">
                        <i className="uil uil-estate"></i>
                        Back to Home
                    </a>
                    <a href="/#projects" className="button button--flex button--white notfound-button">
                        <i className="uil uil-briefcase-alt"></i>
                        View Projects
                    </a>
                    <a href="/#contact" className="button button--flex button--white notfound-button">
                        <i className="uil uil-message"></i>
                        Contact Me
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
