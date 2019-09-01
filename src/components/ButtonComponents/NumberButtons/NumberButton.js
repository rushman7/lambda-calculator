import React from "react";

const NumberButton = (props) => {
  const { number } = props;
  return (
    <button className="num-button">{number}</button>
  );
};

export default NumberButton;