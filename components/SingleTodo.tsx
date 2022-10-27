import React, { useEffect, useRef, useState } from "react";
import InputField from "./InputField";
import TodoList from "./TodoList";

const SingleTodo: React.FC<SingleTodoProps> = ({ setTodos, todo, todos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((e) => e.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    // console.log(todos.map((e) => (e.id === id ? { ...e, todo: editTodo } : e)));

    setTodos(todos.map((e) => (e.id === id ? { ...e, todo: editTodo } : e)));
    setEdit(false);
  };

  useEffect(() => {
    ref.current?.focus();
  }, [edit]);

  const ref = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={ref}
          type="text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {todo.isDone ? <s>{todo.todo}</s> : <span>{todo.todo}</span>}
          <div
            style={{
              display: "flex",
              gap: "8px",
            }}
          >
            <span onClick={() => handleDelete(todo.id)}>delete</span>
            <span
              onClick={() => {
                if (!edit && !todo.isDone) {
                  setEdit(!edit);
                }
              }}
            >
              edit
            </span>
            <span onClick={() => handleDone(todo.id)}>done</span>
          </div>
        </div>
      )}
    </form>
  );
};

export default SingleTodo;
