import React, { useState } from "react";

export const Example1 = () => {
  const [value, setValue] = useState("Hello World");
  return (
    <div>
      <h2>Example of type inferring </h2>
      <p>{value} this is a type inferrance</p>
    </div>
  );
};

export const Example2 = () => {
  //define type alias
  type TUser = {
    name: string;
    age: number;
    hasRegistered: boolean;
  };
  const [user, setUser] = useState<TUser>({
    name: "Emmanuel",
    age: 23,
    hasRegistered: true,
  });
  return (
    <div>
      <h2>Example of custom type with object </h2>
      <p>
        Hello {user.name}, you are {user.age} years old and
        {user.hasRegistered && "has registered"}
      </p>
    </div>
  );
};

const Example3 = () => {
  type TUser = {
    id: number;
    name: string;
    age: number;
  };
  const [users, setUsers] = useState<TUser[]>([]);

  const handleUser = (e: React.MouseEvent<HTMLButtonElement>) => {
    setUsers([
      {
        id: 1,
        name: "Emmanuel",
        age: 24,
      },
    ]);
  };
  return (
    <div>
      <h3>Example of empty array as initial state</h3>
      <section>
        {users.map((user) => (
          <div key={user.id}>
            {user.name} is {user.age} old
          </div>
        ))}
      </section>
      <button onClick={handleUser}>Set user</button>
    </div>
  );
};
