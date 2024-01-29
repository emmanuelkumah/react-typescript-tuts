import React from "react";

//Example of typing React Components props with React.FC
export const MyComponent: React.FC<{ hasLoggedIn: boolean }> = ({
  hasLoggedIn,
}) => {
  return (
    <div>
      <h3>Typing component props with React.FC</h3>
      {hasLoggedIn && "Welcome to learn TypeScript"}
    </div>
  );
};

//Example of inline typing of porops

export const MyComponent2 = ({ hasLoggedIn }: { hasLoggedIn: boolean }) => {
  return (
    <div>
      <h3>Inline typing of props 1</h3>
      {hasLoggedIn && "Welcome to learn inline typing of props TypeScript"}
    </div>
  );
};

export const MyComponent3 = ({
  firstName,
  age,
}: {
  firstName: string;
  age: number;
}) => {
  return (
    <div>
      <h3>Inline Typing of props</h3>
      Hello {firstName} you have {age} years of development experience
    </div>
  );
};
