import { logDOM } from "@testing-library/react";
import React from "react";

function Input(props) {
    let [inputState, setInputState] = React.useState("");


    function handleInputChange(event) {
        let val = event.target.value;
        setInputState(val);
    };
    function addVal() {
        let inputVal = ""; 
        props.currentButton.forEach(num => {
            inputVal+=num;
        });
        return inputVal;
    }


    return <input name="eval" value={addVal()} onChange={handleInputChange}/>
}

export default Input;