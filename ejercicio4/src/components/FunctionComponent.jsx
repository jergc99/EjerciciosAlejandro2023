import React from "react";

let x = "Jeremy"

function param(x) {
    return('Mi nombre es'+x)
}

function FunctionComponent(){
    return(
        <h2>{param(x)}</h2>
    )
}

export default FunctionComponent