import React from 'react'
import './Project.css'
import chatbook from "../../images/ChatBook.png"
import dashboard from "../../images/github-dasboard.png"
import social  from "../../images/SocialBook.png" 
function Project() {
    return (
        <div id="project" className="project">
            <h1>Projects</h1>
            <div className="chatbook">
            <img src={chatbook} alt="" />
            <div className="chatbook-right">
            <p className="name">ChatBook</p>
            <p className="detail">A real time chat application where users can send message and emoji to each other. The app keeps track of all the user, when they are joining and leaving</p>
            <div className="tech">
                <p>Html</p>
                <p>Css</p>
                <p>JavaScript</p>
                <p>Socket.io</p>
            </div>
            <div className="source">
            <a href="https://github.com/SihotiyaKartik/ChatBook" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a>
            <a href="https://kartik-real-time-chat-app.herokuapp.com/" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"></i></a>
            </div>
            </div>
            </div>
            <div className="github-d">
            <div className="github-d-right">
                <p className="name">Github Dashboard</p>
                <p className="detail">A github dashboard that allows user to view various github repositories and their branches, issues, and commits on a particular branch using github-api</p>
                <div className="tech">
                    <p>React.js</p>
                    <p>Github api</p>
                </div>
                <div className="source">
                    <a href="https://github.com/SihotiyaKartik/git-repo-viewer" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a>
                    <a href="https://kartik-github-dashboard.netlify.app/" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"></i></a>
                </div>
            </div>
            <img src={dashboard} alt="" />
            </div>
            <div className="social">
            <img src={social} alt="" />
            <div className="social-right">
            <p className="name">SocialBook</p>
            <p className="detail">A social media application where you can connect with people around the globe. Some features available are following, posting image, liking post, messaging people and many more.</p>
            <div className="tech">
                <p>React.js</p>
                <p>MongoDB</p>
                <p>Node.js</p>
                <p>Socket.io</p>
                <p>Express</p>
            </div>
            <div className="source">
            <a href="https://github.com/SihotiyaKartik/SocialBook" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a>
            <a href="https://github.com/SihotiyaKartik/SocialBook" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt"></i></a>
            </div>
            </div>
            </div>
            <h2 className="other-text">Some other project</h2>
            <div className="other-project">
                <div className="sub-other">
                    <div className="first">
                    <i class="far fa-folder-open"></i>
                    <a href="https://github.com/SihotiyaKartik/getWeather" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a>
                    </div>
                    <div className="second">getWeather</div>
                    <div className="third">Application for getting current weather of 200K+ cities using openWeather api</div>
                    <div className="fourth getWeather">
                        <p>React.js</p>
                        <p>openWeather api</p>
                        <p>css</p>
                    </div>
                </div>
                <div className="sub-other">
                    <div className="first">
                    <i class="far fa-folder-open"></i>
                    <a href="https://github.com/SihotiyaKartik/tic-tac-toe" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a>
                    </div>
                    <div className="second">Tic-Tac-Toe</div>
                    <div className="third">Application for playing Tic-Tac-Toe game with your friends in offline mode</div>
                    <div className="fourth">
                        <p>React.js</p>
                        <p>css</p>
                    </div>
                </div>
                <div className="sub-other">
                    <div className="first">
                    <i class="far fa-folder-open"></i>
                    <a href="https://github.com/SihotiyaKartik/grocery-store-application" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a>
                    </div>
                    <div className="second">Grocery Website</div>
                    <div className="third">A frontend project for grocery application where you can add or remove item in your cart and purchase them.</div>
                    <div className="fourth">
                        <p>React.js</p>
                        <p>css</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project
