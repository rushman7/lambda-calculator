import React from "react";

const OperatorButton = (props) => {
  return (
    <button name={props.operator} className="op-button" onClick={e=> props.onOpClick(e.target.name)}>{props.operator}</button>
  );
};

export default OperatorButton;