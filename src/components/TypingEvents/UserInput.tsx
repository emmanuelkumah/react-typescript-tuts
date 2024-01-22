import React from "react";

const UserInput = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("button clicked");
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter name"
          onChange={handleInputChange}
        />
        <button onClick={handleClick}>Submit </button>
      </form>
    </div>
  );
};

export default UserInput;
