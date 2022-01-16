import React from "react";

const Object = () => {
  let [people, setPeople] = React.useState({
    name: "Ahmed",
    age: 22,
    message: "A random message",
  });

  const changeMessage = () => setPeople({ ...people, message: "another msg " });
  return (
    <>
      <h3>{people.name}</h3>
      <h3>{people.age}</h3>
      <h4>{people.message}</h4>
      <button className="btn" onClick={changeMessage}>
        {" "}
        Change message
      </button>
    </>
  );
};
export default Object;
