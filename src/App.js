import { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { BsTrash } from 'react-icons/bs';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';
import './App.css';
import TodoFilter from './components/TodoFilter/TodoFilter';

function App() {
	const [todolist, setTodolist] = useState([]);
  const [itemFilter, setFilter] = useState('All');

  useEffect(() => {
    const todoFromLocal = localStorage.getItem("todos");
    if (todoFromLocal) {
      setTodolist(JSON.parse(todoFromLocal));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todolist));
  }, [todolist]);

	const onAddTodo = (title) => {
		const newTodo = {
			id: v4(),
			title,
			isDone: false,
		};
		setTodolist((prevList) => [newTodo, ...prevList]);
	};

	const onItemChecked = (itemId) => {
		const itemIndex = todolist.findIndex(({ id }) => id === itemId);
		const newTodo = [...todolist];
		const newTodoItem = {
			...newTodo[itemIndex],
			isDone: !newTodo[itemIndex].isDone,
		};
		newTodo[itemIndex] = newTodoItem;
		setTodolist(newTodo);
	};

  const onItemRemoved = (itemId) => {
    const newTodo = todolist.filter((item) => item.id !== itemId);
    setTodolist(newTodo);
  };

  const onFilterChange = (filter) => {
    setFilter(filter);
  };

  const onClearDoneTodos = () => {
    const activeTodos = todolist.filter((todo) => {
      return todo.isDone === false;
    })
    setTodolist(activeTodos);
    setFilter('All');
  };

	return (
    <div className="flex items-center justify-center w-screen h-screen transition-all ">
      <div className="flex flex-grow items-center justify-center h-full">
        {/* Component Start */}
        <div className="max-w-full px-7 pt-10 py-10 bg-white rounded-lg shadow-lg w-1/2 h-screen">
          <Header appName={"#todos"} />
          <TodoFilter
            currentFilter={itemFilter}
            onFilterChange={onFilterChange}
          />
          {itemFilter !== "Complete" && <TodoForm onAddTodo={onAddTodo} />}
          <TodoList
            todos={todolist}
            itemFilter={itemFilter}
            onItemChecked={onItemChecked}
            onItemRemoved={onItemRemoved}
          />
          {itemFilter === "Complete" && (
            <div className="flex flex-row justify-end">
              <button
                className="flex flex-row items-center px-4 py-2 text-center font-medium text-xl rounded-md bg-red-600 text-white"
                onClick={onClearDoneTodos}>
                <span className='mr-2'> <BsTrash fontSize={20} /> </span>
                Clear
              </button>
            </div>
          )}
        </div>
        {/* Component End  */}
      </div>
    </div>
  );
}

export default App;
