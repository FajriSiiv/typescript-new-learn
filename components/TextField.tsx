import React, { FC, useRef, useState } from "react";

interface Person {
  username: string;
  password: string;
}

interface Props {
  text: string;
  ok?: boolean;
  inte?: number;
  fn: (bob: string) => void;
  person: Person;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePlus?: (e: React.MouseEventHandler<HTMLButtonElement>) => void;
}

interface TextNode {
  text: string;
}

const TextField: React.FC<Props> = ({
  fn,
  person,
  text,
  inte,
  ok,
  handleChange,
  handlePlus,
}) => {
  const [count, setCount] = useState<TextNode>({ text: "hello" });
  const [number, setNumber] = useState({ inte });

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <h1>{text}</h1>
      <h2>{person.username}</h2>
      <h2>{person.password}</h2>
      <input type="text" ref={inputRef} onChange={handleChange} />
    </div>
  );
};

export default TextField;
