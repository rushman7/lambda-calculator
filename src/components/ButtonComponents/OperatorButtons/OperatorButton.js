import React from "react";

const OperatorButton = (props) => {
  const { operator } = props;
  return (
    <button>{operator}</button>
  );
};

export default OperatorButton;