import React from 'react'
import './About.css'
function About() {
    return (
        <div id="about" className="about">
            <div className="sub-about">
            <p className="intro">Hello World, My name is</p>    
            <h1>Kartik Sihotiya</h1>
            <div className="text-animation">
                <p>I'm</p>
                <ul>
                    <li>Developer</li>
                    <li>Programmer</li>
                    <li>Engineer</li>
                    <li>Curious learner</li>
                </ul>
            </div>
            <p className="details">Graduated from National Institute of Technology Patna in Electronics and Communication Engineering.</p> 
            <p className="more-detail">Apart from that I am a full stack developer and open source enthusiast</p>
            
            </div>
        </div>
    )
}

export default About
