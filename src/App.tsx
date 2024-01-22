import React from "react";
import Users from "./components/TypingProps/Users";
import Greetings from "./components/TypingProps/Greetings";

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
    </div>
  );
}

export default App;
