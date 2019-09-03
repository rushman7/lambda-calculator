import React from "react";

const NumberButton = (props) => {
  return (
    <button name={props.number} className="num-button" onClick={e => props.onNumClick(e.target.name)}>{props.number}</button>
  );
};

export default NumberButton;