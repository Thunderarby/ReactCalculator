import React, { useEffect } from 'react';
import buttons from './buttonInfo';
import Button from "./Button";
function App() {
let [buttonState, setButtonState] = React.useState({
  currentValue: "",
  secondValue: "",
  currentSymbol: null
});
let [resultState, setResultState] = React.useState("");
let [equalState, setEqualState] = React.useState(false);
  function onAdd(button) {
    if (typeof button === "string") {
      evaluate(); 
      if (button === "=") {
        setEqualState((prevState) => !prevState);
        setResultState((prevState) => String(prevState));
      }
      else{
      setButtonState((prevContent) => ({currentSymbol:button, secondValue:prevContent.currentValue, currentValue:""}));
      }

    } else {
        setButtonState((prevContent) => {
          let finalVal = equalState ? button :("" + prevContent.currentValue + button);
          if (equalState) {
            setEqualState((prevState) => !prevState);
          }
          return {...prevContent, currentValue:finalVal}
          });
    }
  }

  function evaluate() {
    if (buttonState.secondValue !== "" && buttonState.currentValue!=="") {
      console.log(buttonState.currentSymbol);
      switch (buttonState.currentSymbol) {
        case "+":
          setResultState(Number(buttonState.secondValue) + Number(buttonState.currentValue));
          break;
        case "-":
          setResultState(Number(buttonState.secondValue) - Number(buttonState.currentValue));
          break;
        case "*":
          setResultState(Number(buttonState.secondValue) * Number(buttonState.currentValue));
          break;
        case "/":
          setResultState(Number(buttonState.secondValue) / Number(buttonState.currentValue));
          break;
        default:
          break;
      }
    } 
  }
  useEffect(() => setButtonState(() =>  ({currentValue: resultState, secondValue: "", currentSymbol:null})), [resultState]);
  useEffect(() => console.log(buttonState), [buttonState]);
  useEffect(() => console.log(equalState), [equalState]);
  return (
    <>
    <input name="eval" value={buttonState.currentValue} readOnly={true} />
    {buttons.map((button) => (<Button key={button} content={button} onClick={onAdd}/>))}
    </>
    );

}

export default App;
