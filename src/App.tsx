import React from "react";
import Users from "./components/TypingProps/Users";
import { Greetings } from "./components/TypingProps/Greetings";
import { Greetings3 } from "./components/TypingProps/Greetings";
import { MyComponent } from "./components/TypingProps/MyComponent";
import { MyComponent2 } from "./components/TypingProps/MyComponent";
import { MyComponent3 } from "./components/TypingProps/MyComponent";

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
      {/* Typing component props with React.FC */}
      <MyComponent hasLoggedIn={true} />
      <MyComponent2 hasLoggedIn={true} />
      <MyComponent3 firstName="Emmanuel" age={3} />
      <Greetings firstName="Emmanuel" lastName="Kumah" />
      <Greetings3 firstName="Ismael" lastName="Thomas" />
      <Users data={userDetails} />
    </div>
  );
}

export default App;
