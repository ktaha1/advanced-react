import react from "react";
import React from "react";
const error = () => {
  let title = "The title of error example component";
  const handleClick = () => {
    title = "hello people";
    console.log(title);
  };
  return (
    <react.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </react.Fragment>
  );
};

export default error;
