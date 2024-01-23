import React from "react";
import Users from "./components/TypingProps/Users";
import Greetings from "./components/TypingProps/Greetings";
import Parent from "./components/ComponentProps/Parent";
import Child from "./components/ComponentProps/Child";
import UserInput from "./components/TypingEvents/UserInput";
import UserName from "./components/Hooks/UserName";

function App() {
  //array of objects
  const userDetails = [
    { name: "Roberty Hagan", age: 23, hasPaid: true },
    { name: "Timothy Tans", age: 12, hasPaid: false },
    { name: "Cynthia Robets", age: 34, hasPaid: true },
  ];
  return (
    <div>
      <h3>React TypeScript Tutorial</h3>
      <Greetings firstName="Emmanuel" lastName="Kumah" />
      <Users users={userDetails} />
      {/* Using Component as Props */}
      <Parent>
        <Child />
      </Parent>
      {/* Typing events */}
      <UserInput />
      {/* Typing useState */}
      <UserName />
    </div>
  );
}

export default App;
