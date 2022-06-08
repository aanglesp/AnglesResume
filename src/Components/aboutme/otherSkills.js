import React, { useState, useEffect } from "react";

export default function Skill(props){
    const [style, setStyle] = useState()

    useEffect(() => {
        setTimeout(() => {
            const newStyle = {
                color: `${props.color}`
            };
            setStyle(newStyle);
        }, 200);
    }, [props.percentage])

    return(
        <div className="pad2">
            <p className="textInfo" style={style}>{props.skillName}</p>
        </div>

    )
}