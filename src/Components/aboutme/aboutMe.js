import React from "react";
import Skill from "./skill";
import OtherSkill from "./otherSkills"

export default function AboutMe() {


    const skillsArray = [
        {
            id: "1",
            skillName: "HTML5",
            percentage: "76%",
            color: "#5F28EB"
        },
        {
            id: "2",
            skillName: "CSS3",
            percentage: "72%",
            color: "#ff2253"
        },
        {
            id: "3",
            skillName: "JAVASCRIPT",
            percentage: "75%",
            color: "#d26cd5"
        },
        {
            id: "4",
            skillName: "TYPESCRIPT",
            percentage: "75%",
            color: "#a1ce5b"
        },
        {
            id: "5",
            skillName: "ANGULAR",
            percentage: "65%",
            color: "#66b3cc"
        },
        {
            id: "6",
            skillName: "REACT",
            percentage: "65%",
            color: "#08fdd8"
        },
        {
            id: "7",
            skillName: "FIGMA",
            percentage: "80%",
            color: "#f0bb4b"
        },
    ];

    const OtherSkillsArray = [
        {
            id: "1",
            skillName: "GIT",
            percentage: "76%",
            color: "#5F28EB"
        },
        {
            id: "2",
            skillName: "FIGMA",
            percentage: "72%",
            color: "#ff2253"
        },
        {
            id: "3",
            skillName: "ADOBE XD",
            percentage: "75%",
            color: "#d26cd5"
        },
        {
            id: "4",
            skillName: "GRAPHQL",
            percentage: "75%",
            color: "#a1ce5b"
        },
        {
            id: "5",
            skillName: "SASS",
            percentage: "65%",
            color: "#66b3cc"
        },
        {
            id: "6",
            skillName: "TAILWIND",
            percentage: "65%",
            color: "#08fdd8"
        },
        {
            id: "7",
            skillName: "BOOTSTRAP",
            percentage: "80%",
            color: "#f0bb4b"
        },
        {
            id: "8",
            skillName: "GRAPHQL",
            percentage: "80%",
            color: "#5F28EB"
        },
    ];

    const skills =  skillsArray.map((item) => {
        return (
            <Skill
                key={item.id}
                skillName={item.skillName}
                percentage={item.percentage}
                color={item.color}
            />
        );
    })

    const OhterSkills =  OtherSkillsArray.map((item) => {
        return (
            <OtherSkill
                key={item.id}
                skillName={item.skillName}
                percentage={item.percentage}
                color={item.color}
            />
        );
    })

    return (
        <div className="aboutMeDiv" id="aboutMeScreen">
            <div className="cardAboutMe Knowledge">
                <h2 className="h2Font pad2">&gt; Skills</h2>
                <div className="pad2">{skills}</div>
            </div>
            <div className="cardAboutMe PersonalInfo">
                <h2 className="h2Font pad2">&gt; personal_info</h2>
                <p className="textInfo pad2">
                    Bachelor of Systems Engineering with knowledge in SCRUM planning,
                    usability and optimization of functional design,understanding and
                    resolution of obstacles. Skills in multitasking,clean architecture and
                    implementation of best practices, as wellas knowledge of APIs and
                    database integration. With experiencein React and Angular, passionate
                    and motivated to learn, growand develop in front-end. Ability to work
                    under pressure, adaptto new situations and prepare for future
                    challenges.
                </p>
            </div>
            <div className="OherSkills cardAboutMe">
                <h2 className="h2Font pad2">&gt; Other Skills</h2>
                <div className="pad2">{OhterSkills}</div>
            </div>
        </div>
    );
}
