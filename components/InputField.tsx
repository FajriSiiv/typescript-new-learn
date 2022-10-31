import React, { useRef } from "react";

interface Props {
  todo: any;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <>
      <form
        action=""
        onSubmit={(e) => {
          handleAdd(e);
          ref.current?.blur();
        }}
      >
        <input
          ref={ref}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="enter a task"
        />
        <button className="button" type="submit">
          Go submit
        </button>
      </form>
    </>
  );
};

export default InputField;
