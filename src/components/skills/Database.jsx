import React from 'react'
import { useLanguage } from '../../context/LanguageContext'

const Database = () => {
    const { t } = useLanguage();

    return (
        <div className="skills__content">
            <h3 className="skills__title">{t.skills.database}</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bxl-postgresql"></i>
                        <div>
                            <h3 className="skills__name">PostgreSQL</h3>
                            <span className="skills__level">{t.skills.levels.advanced}</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bxl-mongodb"></i>
                        <div>
                            <h3 className="skills__name">MongoDB</h3>
                            <span className="skills__level">{t.skills.levels.advanced}</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-server"></i>
                        <div>
                            <h3 className="skills__name">ChromaDB (Vector)</h3>
                            <span className="skills__level">{t.skills.levels.intermediate}</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-data"></i>
                        <div>
                            <h3 className="skills__name">MySQL / SQLite</h3>
                            <span className="skills__level">{t.skills.levels.advanced}</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bxl-firebase"></i>
                        <div>
                            <h3 className="skills__name">Firebase Firestore</h3>
                            <span className="skills__level">{t.skills.levels.intermediate}</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-network-chart"></i>
                        <div>
                            <h3 className="skills__name">Neo4j (Graph)</h3>
                            <span className="skills__level">{t.skills.levels.intermediate}</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-data"></i>
                        <div>
                            <h3 className="skills__name">InfluxDB (Time Series)</h3>
                            <span className="skills__level">{t.skills.levels.intermediate}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Database