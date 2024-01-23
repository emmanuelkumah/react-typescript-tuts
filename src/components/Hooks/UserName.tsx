import React, { useState } from "react";

const UserName = () => {
  const [users, setUsers] = useState<{ id: number; userName: string }[]>([]);
  const [message, setMessage] = useState<string | null>(null);

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
