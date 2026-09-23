import React from 'react'
import { useLanguage } from '../../context/LanguageContext'

const Tools = () => {
    const { t } = useLanguage();

    return (
        <div className="skills__content">
            <h3 className="skills__title">{t.skills.tools}</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bxl-visual-studio"></i>
                        <div>
                            <h3 className="skills__name">VS Code</h3>
                            <span className="skills__level">{t.skills.levels.years4}</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bxl-git"></i>
                        <div>
                            <h3 className="skills__name">Git & GitHub</h3>
                            <span className="skills__level">{t.skills.levels.years3}</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bxl-docker"></i>
                        <div>
                            <h3 className="skills__name">Docker</h3>
                            <span className="skills__level">{t.skills.levels.years2}</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bxl-android"></i>
                        <div>
                            <h3 className="skills__name">Android Studio</h3>
                            <span className="skills__level">{t.skills.levels.years3}</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-station"></i>
                        <div>
                            <h3 className="skills__name">Postman</h3>
                            <span className="skills__level">{t.skills.levels.years2}</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bxl-figma"></i>
                        <div>
                            <h3 className="skills__name">Figma</h3>
                            <span className="skills__level">{t.skills.levels.years3}</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bxl-aws"></i>
                        <div>
                            <h3 className="skills__name">AWS & Cloud</h3>
                            <span className="skills__level">{t.skills.levels.years1}</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-cube-alt"></i>
                        <div>
                            <h3 className="skills__name">Kubernetes</h3>
                            <span className="skills__level">{t.skills.levels.years1}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tools