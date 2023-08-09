import React from 'react';
import Button from './Button';
import buttonInfo from './buttonInfo';
import Input from './Input';
function App() {
  let [buttonState, setButtonState] = React.useState([]);
  function onButton(button) {
    setButtonState(prevContent => {return [...prevContent, button] });
  };

  

  return (
    <>
    <Input currentButton={buttonState}/>
    {buttonInfo.map((button, index) => (<Button key={index} content={button.name} onClick={onButton}/>))}
    </>
    );

}

export default App;
