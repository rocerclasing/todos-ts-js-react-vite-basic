
import {Todo} from "../App"
import TodosItem from "./TodosItem";

interface Props{
    todos:Todo[];
    toggleTodo:(selectedTodo: Todo) => void;
    removeTodo:(selectecTodo: Todo) => void;
}

const Todos = ({ todos, toggleTodo, removeTodo }: Props) => {
    return (
      <>
        {todos.map((todo) => (
           <TodosItem key={todo.text} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
        ))}
      </>
    );
  };

export default Todos