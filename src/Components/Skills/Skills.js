import React from 'react'
import './Skills.css'
function Skills() {
    return (
        <div id="skills" className="skills"> 
            <h1>Skills</h1>
            <div className="skills-list">
                <div className="sub-skills">
                <p className="language"><i className="fas fa-code"></i>  Programming Languages</p>
                <p className="sub-lang">Java</p>
                <p className="sub-lang">JavaScript</p>
                <p className="sub-lang">C++</p>
                <p className="sub-lang">MATLAB</p>
                </div>
                <div className="sub-skills">
                <p className="language"><i className="fas fa-code"></i>  Web</p>
                <p className="sub-lang">React.js</p>
                <p className="sub-lang">Express and Node.js</p>
                <p className="sub-lang">MongoDB</p>
                <p className="sub-lang">jquery</p>
                </div>
            </div>
        </div>
    )
}

export default Skills
