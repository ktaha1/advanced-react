import React, { useState, useEffect } from "react";

const Basics = () => {
  let [value, setValue] = useState(0);

  useEffect(() => {
    if (value > 0) {
      document.title = `New Message (${value})`;
    }
  });
  return (
    <>
      <section>
        <h3>{value}</h3>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Change value
        </button>
      </section>
    </>
  );
};
export default Basics;
