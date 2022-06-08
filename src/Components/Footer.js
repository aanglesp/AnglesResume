import React from "react";

export default function Footer(){
    return(
        <nav className="FooterDiv">
            <span className="NameHeader"> Find me in: </span>
            <a className="SocialFooter" href="https://www.linkedin.com/in/aanglesp/"> <i className="ri-linkedin-box-fill"></i> </a>
            <a className="SocialFooter" href="https://twitter.com/a_legs_under"> <i className="ri-twitter-fill"></i> </a>
            <a className="SocialFooter end" href="https://github.com/aanglesp"> <i className="ri-github-fill"></i> </a>
        </nav>
    )
}