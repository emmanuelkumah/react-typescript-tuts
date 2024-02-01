import { useRef } from "react";

const Example = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input type="text" placeholder="Please enter name" ref={inputRef} />
    </div>
  );
};
