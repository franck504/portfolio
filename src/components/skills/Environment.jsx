import React from 'react'

const Environment = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Environment</h3>
    <div className="skills__box">
        {/* Groupe 1 */}
        <div className="skills__group">
            {/* ----------------------------------- */}
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Windows</h3>
                    <span className="skills__level">5 Years</span>
                </div>
            </div>
            {/* ----------------------------------- */}
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Linux</h3>
                    <span className="skills__level">3 Years</span>
                </div>
            </div>
            {/* ----------------------------------- */}
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Github</h3>
                    <span className="skills__level">2 Years</span>
                </div>
            </div>
            
            
        </div>

        {/* Groupe 2 */}
        <div className="skills__group">
            {/* ----------------------------------- */}
            <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Gitlab</h3>
                    <span className="skills__level">2 Years</span>
                </div>
            </div>
            {/* ----------------------------------- */}
            
        </div>
    </div>
</div>
  )
}

export default Environment