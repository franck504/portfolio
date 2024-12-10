import React from 'react'

const Professional = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Professional</h3>
        <div className="skills__box">
            {/* Groupe 1 */}
            <div className="skills__group">
                {/* ----------------------------------- */}
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">HTML-CSS</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                {/* ----------------------------------- */}
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">C++ Arduino</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>
                {/* ----------------------------------- */}
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">ReactNative</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
               
            </div>

            {/* Groupe 2 */}
            <div className="skills__group">
               
                {/* ----------------------------------- */}
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Flutter</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>
                {/* ----------------------------------- */}
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Javascript</h3>
                        <span className="skills__level">Intermediate</span>
                    </div>
                </div>
                {/* ----------------------------------- */}
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Kotlin</h3>
                        <span className="skills__level">Basic</span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Professional