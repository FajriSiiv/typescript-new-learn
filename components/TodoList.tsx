import React from "react";
import SingleTodo from "./SingleTodo";

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  return (
    <div>
      {todos.map((e, i) => (
        <SingleTodo key={e.id} todo={e} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TodoList;
