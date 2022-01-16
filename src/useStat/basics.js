import react, { useState } from "react";

const Basics = () => {
  let [title, setText] = useState("Random title");
  const handleClick = () => {
    if (title === "Random title") setText("Another random title");
    else setText("Random title");
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

export default Basics;
