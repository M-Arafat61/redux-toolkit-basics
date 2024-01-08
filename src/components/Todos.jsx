import { useDispatch, useSelector } from "react-redux";
import { removeToDo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div className='text-2xl underline'>Todos</div>
      <ul className='list-none'>
        {todos.map(todo => (
          <li
            key={todo.id}
            className='flex items-center justify-between gap-x-10 p-2'
          >
            <div>{todo.text}</div>
            <button
              className='bg-red-500/85 px-4 py-2 rounded-full'
              onClick={() => dispatch(removeToDo(todo.id))}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
