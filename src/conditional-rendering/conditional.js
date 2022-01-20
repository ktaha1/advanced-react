import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users/Ezmobiu";
const Conditional = () => {
  const [loading, isLoading] = useState(true);
  const [error, isError] = useState(false);
  const [user, setUser] = useState("Default user");

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          isLoading(false);
          isError(true);
          throw new Error(res.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        isLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) {
    return (
      <>
        <h3>Loading ...</h3>
      </>
    );
  }

  if (error) {
    return (
      <>
        <h3>Error ...</h3>
      </>
    );
  }

  return (
    <>
      <h3>{user}</h3>
    </>
  );
};
export default Conditional;
