interface Props {
  text: string;
  ok: boolean;
  inte: number;
  fn: () => void;
}

interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

interface SingleTodoProps {
  todo: Todo;
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}
