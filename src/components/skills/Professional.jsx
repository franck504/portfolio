import React from 'react'
import { useLanguage } from '../../context/LanguageContext'

const Professional = () => {
    const { t } = useLanguage();

    return (
        <div className="skills__content">
            <h3 className="skills__title">{t.skills.professional}</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-shape-polygon"></i>
                        <div>
                            <h3 className="skills__name">Flutter</h3>
                            <span className="skills__level">{t.skills.levels.advanced}</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bxl-python"></i>
                        <div>
                            <h3 className="skills__name">Python</h3>
                            <span className="skills__level">{t.skills.levels.advanced}</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bxl-react"></i>
                        <div>
                            <h3 className="skills__name">React / TS</h3>
                            <span className="skills__level">{t.skills.levels.intermediate}</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-code-block"></i>
                        <div>
                            <h3 className="skills__name">C++ Arduino</h3>
                            <span className="skills__level">{t.skills.levels.advanced}</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bxl-nodejs"></i>
                        <div>
                            <h3 className="skills__name">Node.js / Express</h3>
                            <span className="skills__level">{t.skills.levels.intermediate}</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bxl-android"></i>
                        <div>
                            <h3 className="skills__name">Kotlin</h3>
                            <span className="skills__level">{t.skills.levels.intermediate}</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bxl-html5"></i>
                        <div>
                            <h3 className="skills__name">HTML-CSS / JS</h3>
                            <span className="skills__level">{t.skills.levels.advanced}</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bxl-react"></i>
                        <div>
                            <h3 className="skills__name">React Native</h3>
                            <span className="skills__level">{t.skills.levels.intermediate}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Professional
