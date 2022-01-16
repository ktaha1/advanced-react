import react from "react";
import React, { useState } from "react";
import { data } from "../data";

const ArraysUseState = () => {
  let [people, setPeople] = useState(data);
  const remoteItem = (id) => {
    setPeople(people.filter((people) => people.id !== id));
  };
  return (
    <react.Fragment>
      {people.map((people) => {
        const { id, name } = people;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => remoteItem(id)}>Delete</button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={() => setPeople([])}>
        Delete All items
      </button>
    </react.Fragment>
  );
};
export default ArraysUseState;
