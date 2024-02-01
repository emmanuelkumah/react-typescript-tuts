import React, { useState } from "react";

const UserName = () => {
  //define the type alias
  type Users = {
    id: number;
    userName: string;
  };
  //initialize the state with the type alias
  const [users, setUsers] = useState<Users[]>([]);

  // Initialize the state with the string type or null
  const [message, setMessage] = useState<string | null>(null);

  // Initialize the state with the string type
  const [greetings, setGreetings] = useState<string>("Hello World");

  const handleChangeGreetings = () => {
    setGreetings("Hey! You");
  };

  const handleClick = () => {
    setUsers([
      ...users,
      {
        id: 1,
        userName: "Emmanuel",
      },
    ]);
    //set message
    setMessage("User added successfully");
  };

  return (
    <div>
      <section>
        <h2>Greetings: {greetings}</h2>
        <button onClick={handleChangeGreetings}>Change Greeting</button>
      </section>
      <h3>Display Users</h3>
      {message && message}
      {users.map((user) => (
        <p key={user.id}>{user.userName}</p>
      ))}
      <button onClick={handleClick}>Set User</button>
    </div>
  );
};

export default UserName;
