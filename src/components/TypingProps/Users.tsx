import React from "react";
//define the type for the object
type UserType = {
  name: string;
  age: number;
  hasPaid: boolean;
};

//define type for array of object
type UserTypeArray = UserType[];
//using array of object as props
const Users: React.FC<{ data: UserTypeArray }> = ({ data }) => {
  return (
    <div>
      <h3>Typing array of objects props with React.FC</h3>
      {data.map((item) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
};

export default Users;
