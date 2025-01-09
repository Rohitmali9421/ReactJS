import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from './Features/todo/todoslice';

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-pink-50 flex flex-col items-center py-10">
      <h1 className="text-center font-extrabold text-4xl text-gray-800 mb-6">Todo App</h1>
      <div className="flex items-center space-x-4 mb-6">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={input}
          className="border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-72"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={handleAddTodo}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300"
        >
          Add Todo
        </button>
      </div>
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        {todos.length === 0 ? (
          <p className="text-center text-gray-500">No tasks yet. Add some!</p>
        ) : (
          <ul className="space-y-4">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm"
              >
                <span className="text-gray-700 font-medium">{todo.text}</span>
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="text-red-500 hover:text-red-600 font-bold text-lg transition"
                >
                  &times;
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
