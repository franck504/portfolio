import React from 'react'

const Tools = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Tools</h3>
    <div className="skills__box">
        {/* Groupe 1 */}
        <div className="skills__group">
            {/* ----------------------------------- */}
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">VsCode</h3>
                    <span className="skills__level">4 Years</span>
                </div>
            </div>
            {/* ----------------------------------- */}
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">SublimeText</h3>
                    <span className="skills__level">4 Years</span>
                </div>
            </div>
            {/* ----------------------------------- */}
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">AndroidStudio</h3>
                    <span className="skills__level">3 Years</span>
                </div>
            </div>
            
            
        </div>

        {/* Groupe 2 */}
        <div className="skills__group">
            {/* ----------------------------------- */}
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Git</h3>
                    <span className="skills__level">2 Years</span>
                </div>
            </div>
            {/* ----------------------------------- */}
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Figma</h3>
                    <span className="skills__level">3 Years</span>
                </div>
            </div>
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Trello</h3>
                    <span className="skills__level">2 Years</span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Tools