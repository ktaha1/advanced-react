import React, { useState } from "react";

const Counter = () => {
  let [value, setValue] = useState(0);

  const complexIncrease = () => {
    setTimeout(() => {
      setValue((prevStat) => {
        return prevStat + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h3>Regular Counter</h3>
        <h2>{value}</h2>
        <button className="btn" onClick={() => setValue(value + 1)}>
          Increase
        </button>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Decrease
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          Reset
        </button>
      </section>
      {/*  */}
      <section style={{ margin: "4rem 0" }}>
        <h3>Complex Counter</h3>
        <h2>{value}</h2>
        <button className="btn" onClick={complexIncrease}>
          Increase
        </button>
      </section>
    </>
  );
};

export default Counter;
