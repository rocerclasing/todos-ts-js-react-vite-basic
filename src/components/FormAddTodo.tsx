import { useState, ChangeEvent, FormEvent } from "react";

interface Props {
  addTodo: (text: string) => void;
}

const FormAddTodo = ({ addTodo }: Props) => {
  //iniciañizando estado
  const [text, setText] = useState("");
  //handlechange
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  //agregan los datos a la lista
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedText = text.trim();
    if (!trimmedText) return; // Avoid adding empty todos
    addTodo(trimmedText); // Add todo if text is not empty
    setText(""); // Clear the input after adding
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">
        <input
          type="text"
          id="todo"
          placeholder="Ingrese todo"
          value={text}
          onChange={handleChange}
        />
        <button type="submit">Add todo</button>
      </label>
    </form>
  );
};

export default FormAddTodo;
