import TodoItem from '../TodoItem/TodoItem';

export default function TodoList({ todos, itemFilter, onItemChecked, onItemRemoved }) {
  const items = todos && todos.filter((item) => {
    if (itemFilter === 'Active') {
      return item.isDone === false;
    } else if (itemFilter === 'Complete') {
      return item.isDone === true;
    } else {
      return true;
    }
  });

  console.log(items, itemFilter);

  const DisplayedTodos = () => {
    if (items && items.length > 0) {
      return (
        <ul className="max-w flex flex-col">
          {
            items.map((todo) => (
              <li
                key={todo.id}
                className="inline-flex items-center justify-center gap-x-2 h-12 mb-4 bg-white text-gray-800 -mt-px rounded-lg">
                <TodoItem
                  {...todo}
                  onItemChecked={onItemChecked}
                  onItemRemoved={onItemRemoved}
                />
              </li>
            ))
          }
        </ul>
      );
    } else {
      return <div className='text-lg text-center'>There are nothing in this list</div>
    }
  }
	return (
		<>
			<DisplayedTodos />
		</>
	);
}
