import React, { useState, useEffect } from "react";

export default function Skill(props){
    const [style, setStyle] = useState()

    useEffect(() => {
        setTimeout(() => {
            const newStyle = {
                opacity: 1,
                width: `${props.percentage}`,
                background: `${props.color}`
            };
            setStyle(newStyle);
        }, 200);
    }, [props.percentage])

    return(
        <div>
            <p className="textInfo">{props.skillName}</p>
            <div className="progress">
                <div className="progress-bar" style={style}>
                </div>
            </div>
        </div>

    )
}