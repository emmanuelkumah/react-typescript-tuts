import React from "react";
//add type to each property in the object
type UserProps = {
  users: {
    name: string;
    age: number;
    hasPaid: boolean;
  }[];
};
//using array of object as props
const Users = ({ users }: UserProps) => {
  return <div>{users[0].name}</div>;
};

export default Users;
