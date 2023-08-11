import React from 'react';
import buttons from './buttonInfo';
import Button from "./Button";
function App() {
let [buttonState, setButtonState] = React.useState([]);
let [operationState, setOperationState] = React.useState();
let [valueState, setValueState] = React.useState([]);
let [evalState, setEvalState] = React.useState(false);
  function onAdd(button) {
    setButtonState((prevContent) => [...prevContent, button]);
    setEvalState(true);
  }

  function add() {
    let newVal = valueState[0] + valueState[1]; 
    setValueState([]);
    
    return newVal;
  }
  function subtract() {
    let newVal = valueState[0] - valueState[1]; 
    setValueState([]);
    return newVal;
  }
  function multiply() {
    let newVal = valueState[0] * valueState[1]; 
    setValueState([]);
    
    return newVal;
  }
  function divide() {
    let newVal = valueState[0] / valueState[1];
    setValueState([]);
    return newVal;
  }

  function display() {
    let displayValue = "";
    let lastElement = buttonState[buttonState.length - 1];
    let values = buttonState.filter((value) => value !== lastElement);
    if (typeof lastElement === "string") {
      if (lastElement === "=") {
        console.log(operationState);
        switch (operationState) {
          case "+":
            return add();
          case "-":
            return subtract();     
          case "*":
            return  multiply();  
          case "/":
            return divide();
          default:
            break;
        }
      } else {
        setOperationState(lastElement);
        setValueState((prevValues) => [...prevValues, values]);
        setButtonState([]);
        console.log(operationState);
        console.log(valueState);
        console.log(buttonState);
      }
      
      
    } else {
      buttonState.forEach((val) => displayValue+=val);
      return displayValue;
    }
    setEvalState(false);
  }

  return (
    <>
    <input name="eval" value={evalState ? display() : ""} readOnly={true} />
    {buttons.map((button, index) => (<Button key={index} content={button} onClick={onAdd}/>))}
    </>
    );

}

export default App;
