import React from "react";

export default function Header(props){
    return(
        <nav className="HeaderDiv">
            <span className="NameHeader">Alexander Angles</span>
            <a className={props.screen.name === "contentScreen" ? "OptionHeader selectedHeader" : "OptionHeader"} onClick={props.handleClick} id="contentScreen">_hello</a>
            <a className={props.screen.name === "aboutMeScreen" ? "OptionHeader selectedHeader" : "OptionHeader"} onClick={props.handleClick} id="aboutMeScreen">_about-me</a>
            <a className={props.screen.name === "projectsScreen" ? "OptionHeader selectedHeader" : "OptionHeader"} onClick={props.handleClick} id="projectsScreen">_projects</a>
            <a className={props.screen.name === "contactMeScreen" ? "OptionHeader selectedHeader end" : "OptionHeader end"} onClick={props.handleClick} id="contactMeScreen">_contact-me</a>
        </nav>
    )
}