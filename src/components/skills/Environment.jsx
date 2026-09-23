import React from 'react'
import { useLanguage } from '../../context/LanguageContext'

const Environment = () => {
    const { t } = useLanguage();

    return (
        <div className="skills__content">
            <h3 className="skills__title">{t.skills.environment}</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-brain"></i>
                        <div>
                            <h3 className="skills__name">LLM & RAG</h3>
                            <span className="skills__level">{t.skills.levels.advanced}</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-bot"></i>
                        <div>
                            <h3 className="skills__name">Agentic AI</h3>
                            <span className="skills__level">{t.skills.levels.intermediate}</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-network-chart"></i>
                        <div>
                            <h3 className="skills__name">LangChain</h3>
                            <span className="skills__level">{t.skills.levels.intermediate}</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-chip"></i>
                        <div>
                            <h3 className="skills__name">Ollama</h3>
                            <span className="skills__level">{t.skills.levels.advanced}</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-terminal"></i>
                        <div>
                            <h3 className="skills__name">Hugging Face</h3>
                            <span className="skills__level">{t.skills.levels.intermediate}</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bxl-tux"></i>
                        <div>
                            <h3 className="skills__name">Linux</h3>
                            <span className="skills__level">{t.skills.levels.years3}</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bxl-windows"></i>
                        <div>
                            <h3 className="skills__name">Windows</h3>
                            <span className="skills__level">{t.skills.levels.years5}</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bxl-google"></i>
                        <div>
                            <h3 className="skills__name">Google Colab</h3>
                            <span className="skills__level">{t.skills.levels.years2}</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-bar-chart-alt-2"></i>
                        <div>
                            <h3 className="skills__name">Kaggle</h3>
                            <span className="skills__level">{t.skills.levels.years2}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Environment