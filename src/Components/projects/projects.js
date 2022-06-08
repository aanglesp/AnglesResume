import React from "react";
import Work from "./work"

export default function Projects(){
    
    const worksArray = [
        {
            id: "1",
            nameWork: "9780Bitcoin.com",
            linkWork: "https://www.9780bitcoin.com/es-PE/",
            imgWork: "../../images/9780bitcoin.png"
        },
        {
            id:"2",
            nameWork: "Card Presentation",
            linkWork:"https://aanglesp.netlify.app/",
            imgWork:""
        },
        {
            id:"3",
            nameWork: "Rick and Morty project",
            linkWork:"https://rick-and-morty-vueangles.netlify.app/",
            imgWork:""
        }
    ]

    const works =  worksArray.map((item) => {
        return (
            <Work
                key={item.id}
                nameWork={item.nameWork}
                linkWork={item.linkWork}
                imgWork={item.imgWork}
            />
        );
    })

    return (
        <div className="ProjectsDiv" id="projectsScreen">
            <div>
                <h1 className="h1Font">
                    WORK
                </h1>
            </div>
            <div className="WorksDiv">
                {works}
            </div>
        </div>
    )
}