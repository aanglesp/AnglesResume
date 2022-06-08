import React from "react";
import Work from "./work"

export default function Projects(){
    
    const worksArray = [
        {
            id: "1",
            nameWork: "9780Bitcoin.com",
            linkWork: "https://www.9780bitcoin.com/es-PE/",
            imgWork: ""
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