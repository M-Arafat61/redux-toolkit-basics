import React from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = React.useState("");
  const dispatch = useDispatch();

  const handleAddTodo = e => {
    e.preventDefault();
    dispatch(addToDo(input));
    setInput("");
  };
  return (
    <form className='my-5' onSubmit={handleAddTodo}>
      <input
        className='bg-white/10 border border-gray-500'
        type='text'
        name='input'
        value={input}
        id=''
        onChange={e => setInput(e.target.value)}
      />
      <button
        className='bg-emerald-400/55 px-5 py-1 rounded-lg font-semibold ml-2'
        type='submit'
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
