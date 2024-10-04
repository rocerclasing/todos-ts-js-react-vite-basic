
import {Todo} from "../App"

interface Props
{
    todo:Todo;
    toggleTodo:(selectedTodo:Todo) => void;
    removeTodo:(selectedTodo:Todo) => void;
}

const TodosItem = ({todo,toggleTodo,removeTodo}: Props) => {
  return (
    <article  className="card">
    <label htmlFor={todo.text}>
      <input
        type="checkbox"
        checked={todo.complete}
        id={todo.text}
        onChange={() => toggleTodo(todo)}
      />
      {todo.text}
    </label>
    <button
      className="contrast"
      type="button"
      onClick={() => removeTodo(todo)}
    >
      Remove
    </button>
  </article>
  )
}

export default TodosItem