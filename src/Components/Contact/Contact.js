import React from 'react'
import './Contact.css'
function Contact() {
    return (
        <div id="contact" className="contact">
            <h1>Get In Touch</h1>
            <p>Feel Free to contact me, if you have any question or update regarding any relevant job. I'll try my best to get back to you</p>
            <a className="mail-me" href="mailto:ksihotiya@gmail.com" target="_blank" rel="noreferrer">Mail Me</a>
            <div className="social-handle">
            <a href="https://github.com/SihotiyaKartik" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a>
            <a href="https://twitter.com/KartikSihotiya" target="_blank" rel="noreferrer"><i class="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/kartik-sihotiya-2002" target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    )
}

export default Contact
