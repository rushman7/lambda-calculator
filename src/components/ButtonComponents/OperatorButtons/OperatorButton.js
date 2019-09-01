import React from "react";

const OperatorButton = (props) => {
  const { operator } = props;
  return (
    <button className="op-button">{operator}</button>
  );
};

export default OperatorButton;