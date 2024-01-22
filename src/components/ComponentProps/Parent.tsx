import React from "react";

const Parent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      This is the Parent component
      {children}
    </div>
  );
};

export default Parent;
