import React from "react";

const SpecialButton = (props) => {
  const { special } = props;
  return (
    <button className="spec-button">{special}</button>
  );
};

export default SpecialButton;