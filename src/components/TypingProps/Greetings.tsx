import React from "react";

//Example of inline typing

//Example of type alias

//type each prop
type Greetings = {
  firstName: string;
  lastName: string;
};

export const Greetings = ({ firstName, lastName }: Greetings) => {
  return (
    <div>
      <p>
        Welcome {firstName}
        {lastName}
      </p>
    </div>
  );
};

type TGreetings = {
  firstName: string;
  lastName: string;
};

const Greetings2: React.FC<{ firstName: string; lastName: string }> = ({
  firstName,
  lastName,
}) => {
  return (
    <div>
      Hellow {firstName} {lastName}
    </div>
  );
};

//using type alias with React.FC
export const Greetings3: React.FC<TGreetings> = ({ firstName, lastName }) => {
  return (
    <div>
      Hello {firstName}
      {lastName}
    </div>
  );
};
