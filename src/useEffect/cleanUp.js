import React, { useState, useEffect } from "react";

const CleanUp = () => {
  let [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("Call useEffect ...");
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("function CleanUp");
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return (
    <>
      <h3>Windows Size</h3>
      <h4>{size}</h4>
    </>
  );
};
export default CleanUp;
