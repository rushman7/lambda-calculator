import React from "react";
import OperatorButton from './OperatorButton';

const Operators = (props) => {
  return (
    <div>
       {props.operators.map((op, index) => 
        <OperatorButton 
        operator={op.char} 
        key={index} 
        onOpClick={props.onOpClick}
       />)}
    </div>
  );
};

export default Operators;
