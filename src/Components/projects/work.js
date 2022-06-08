import React from "react";

export default function Work(props){

    return (
        <div className="CardWork">
            <img src="" alt="imagen" className="WorkImage"/>
            <h3 className="h4Font">{props.nameWork}</h3>
        </div>
    )
}