import React from 'react'
import './Education.css'
function Education() {
    return (
        <div id="education" className="education">

        <h1>Education</h1>
        
        <div className="list">
            <div className="sub-list">
            <i class="fas fa-graduation-cap"></i>
            <p className="field">BTECH IN ELECTRONICS AND COMMUNICATION ENGINEERING</p>
            <p className="year">2019-2023</p>
            <p className="school">National Institute of Technology Patna</p>
            <p className="marks">7.5 CGPA</p>
            </div>
            <div className="sub-list">
            <i class="fas fa-school"></i>
            <p className="field">INTERMEDIATE</p>
            <p className="year">Passing year: 2019</p>
            <p className="school">Rajat Vidyapeeth School, Sikar(Raj.)</p>
            <p className="marks">87.6%</p>    
            </div>
            <div className="sub-list">
            <i class="fas fa-school"></i>
            <p className="field">MATRICULATION</p>
            <p className="year">Passing year: 2017</p>
            <p className="school">Vidya Bharti School, Surat(Guj.)</p>
            <p className="marks">75%</p>   
            </div>
        </div>
        </div>
    )
}

export default Education
