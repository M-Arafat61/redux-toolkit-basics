import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className='bg-green-500/25'>
      <p className='text-center text-4xl py-16'>redux toolkit</p>
      <div className='flex flex-col items-center justify-center '>
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;
