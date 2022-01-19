import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";
const FetchData = () => {
  const [users, setUsers] = useState([]);

  const fetchUser = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    console.log(users);
  };

  useEffect(() => {
    fetchUser();
  });

  return (
    <>
      <h3>Github Users</h3>
    </>
  );
};

export default FetchData;
