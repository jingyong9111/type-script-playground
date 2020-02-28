import React from "react";

type GreetingsProps = {
  name: string;
  mark: string;
  onClick: (name: string) => void;
};
const Yong = ({ name, mark, onClick }: GreetingsProps) => {
  const handleClick = () => onClick(name);
  return (
    <div>
      Hello, {name} {mark}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

Yong.defaultProps = {
  mark: "!"
};

export default Yong;
