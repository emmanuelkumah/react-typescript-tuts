import React from "react";

type GreetingsProps = {
  firstName: string;
  lastName: string;
};

const Greetings = ({ firstName, lastName }: GreetingsProps) => {
  return (
    <div>
      <p>
        Welcome {firstName}
        {lastName}
      </p>
    </div>
  );
};

export default Greetings;
