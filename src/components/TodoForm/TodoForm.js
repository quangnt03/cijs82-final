import { useState } from 'react';

export default function TodoForm({ onAddTodo }) {
	const [input, setInput] = useState('');

	const onInput = (e) => {
		setInput(e.target.value);
	};

	const onKeydown = (e) => {
		if (e.key === 'Enter') {
			onAddNewTodo();
		}
	};

	const onAddNewTodo = () => {
		if (input.trim()) {
			onAddTodo(input);
		}
		setInput('');
	};

	return (
    <div className="flex flex-row justify-start items-center mb-5 h-20 border-green-400">
      <input
        value={input}
        onChange={onInput}
        onKeyDown={onKeydown}
        className="h-14 w-full pl-2 mr-5 bg-transparent text-lg rounded-lg border border-slate-700"
        type="text"
        placeholder="add a new task"
      />
      <button
        className="flex items-center justify-center w-36 p-3 text-2xl rounded-lg text-center text-white bg-blue-700 disabled:bg-gray-600"
        onClick={onAddNewTodo}
        disabled={input.trim() === ""}>
        Add
      </button>
    </div>
  );
}
