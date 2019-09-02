import React from "react";

const NumberButton = (props) => {
  return (
    <button className="num-button" onClick={props.onNumClick}>{props.number}</button>
  );
};

export default NumberButton;