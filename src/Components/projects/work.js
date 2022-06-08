import React from "react";

export default function Work(props){

    console.log(props);
    return (
        <a className="CardWork" target="_blank" href={props.linkWork}>
            {/* <img src={require(props.imgWork)} alt="imagen" className="WorkImage"/> */}
            <h3 className="h4Font">{props.nameWork}</h3>
        </a>
    )
}