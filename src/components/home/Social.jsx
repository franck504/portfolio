import React from 'react'

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://github.com/franck504" className="home__social-icon" target='_blank' rel="noopener noreferrer" aria-label="GitHub">
                <i className="uil uil-github-alt"></i>
            </a>
            <a href="https://www.linkedin.com/in/franck-anselme-andriniavo-tsinjoniaina-b37436269" className="home__social-icon" target='_blank' rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="uil uil-linkedin-alt"></i>
            </a>
            <a href="https://x.com/Tsinjoniai8836" className="home__social-icon" target='_blank' rel="noopener noreferrer" aria-label="X (Twitter)">
                <i className="uil uil-twitter"></i>
            </a>
            <a href="https://www.facebook.com/franck.anselme.9" className="home__social-icon" target='_blank' rel="noopener noreferrer" aria-label="Facebook">
                <i className="bx bxl-facebook"></i>
            </a>
        </div>
    )
}

export default Social