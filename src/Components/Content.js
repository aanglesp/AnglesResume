import React from "react";
import blurs from "../images/BackgroundBlurs.png"
import Typewriter from "typewriter-effect";
import resume from '../assets/cv20Angles.pdf';
import { BrowserRouter, Link } from "react-router-dom"

export default function Content(){

    return(
        <div className="ContentDiv"  id="contentScreen">
            <div className="MyInfoDiv">
                <h3 className="h3Font">Hi all. I am </h3>
                <h1 className="h1Font">Alexander Angles</h1>
                <h2 className="h2Font"> 
                <Typewriter 
                    options={{
                        strings: ['> Web developer', '> Freelancer' ,'> UX/UI designer'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                </h2>
                <br/>
                <span className="textInfo"> A creative developer passionate about new web programming technologies </span>
                <br/>
                <br/>
                <a href={resume} target="_blank" download="cv20Angles.pdf"><button className="glow-on-hover size-btn-small">CV</button></a>
            </div>
            <img className="blurs" src={blurs}/>
            {/* <div className="MyPhotoDiv">
                <img src={cvphoto} alt="asd"/>
            </div> */}
        </div>
    )
}