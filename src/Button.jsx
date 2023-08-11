import React from "react";

function Button(props) {
    return <button onClick={() => props.onClick(props.content)}>{props.content}</button>
}

export default Button;