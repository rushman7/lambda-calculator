import React from "react";
import NumberButton from './NumberButton';

const Numbers = (props) => {
  return (
    <div>
       {props.numbers.map((num, index) => <NumberButton number={num} key={index} onNumClick={props.onNumClick}/>)}
    </div>
  );
};

export default Numbers;