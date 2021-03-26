import React from 'react'

function SkillsSection({skill,progress,width, logo, type}) {
    return (
        <div className="SkillsSection" className={type}>
            <img className="logotype" src={logo}/>
            <div className="skills-container">
                <h5 className="skill-title">{skill}</h5>
                <div className="skill-bar">
                    <p className="skill-text">{progress}</p>
                    <div className="skill-progress">
                        <div className="progress">
                            <div className="inner-pregress" style={{width:width}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillsSection;