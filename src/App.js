import React, { useState } from "react";
import { numbers, operators, specials } from './data';
import "./App.css";
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';
import Specials from './components/ButtonComponents/SpecialButtons/Specials';
import Logo from "./components/DisplayComponents/Logo";
import Display from './components/DisplayComponents/Display';

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  const [display, setDisplay] = useState(0);
  const [number, setNumber] = useState(numbers);

  const onNumClick = (e) => {
    if (e.target.textContent) {
      setDisplay(parseInt(display + e.target.textContent, 10))
      console.log(display)
    }

  }

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display display={display}/>
        <div className="buttons">
          <div className="first-half">
            <Specials />
            <Numbers numbers={number} onNumClick={onNumClick}/>
          </div>
          <div className="second-half">
            <Operators />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
