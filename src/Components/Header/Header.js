import React, { useState } from 'react'
import './Header.css'
import './Header.scss'

function Header() {
    const [visible,setV] = useState(false);
    const handleClick = (e) => {
        e.currentTarget.classList.toggle('is-active');
        setV(!visible);
    }
    const handle = () => {
        setV(false);
        document.querySelector(".hamburger").classList.toggle('is-active');
    }
    return (
        <div className={visible ? "yes" : "header"}>
            <div className="free-space"></div>
            <ul>
                <li><a className="link1" onClick={handle} href="#about">About</a></li>
                <li><a className="link2" onClick={handle} href="#education">Education</a></li>
                <li><a className="link3" onClick={handle} href="#skills">Skills</a></li>
                <li><a className="link4" onClick={handle} href="#project">Projects</a></li>
                <li><a className="link5" onClick={handle} href="#contact">Contact</a></li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                <div className="hamburger__container">
                <div className="hamburger__inner"></div>
                <div className="hamburger__hidden"></div>
                </div>
            </div>
    </div>
    )
}

export default Header
