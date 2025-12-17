import React from 'react'

const Database = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Database</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bx-data"></i>
                        <div>
                            <h3 className="skills__name">MySQL</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bxl-mongodb"></i>
                        <div>
                            <h3 className="skills__name">MongoDB</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bxl-firebase"></i>
                        <div>
                            <h3 className="skills__name">Firebase</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-network-chart"></i>
                        <div>
                            <h3 className="skills__name">Neo4j</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i className="bx bx-server"></i>
                        <div>
                            <h3 className="skills__name">RethinkDB</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Database