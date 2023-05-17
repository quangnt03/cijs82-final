import { BsTrash } from "react-icons/bs";

export default function TodoItem({
  id,
  title,
  isDone,
  onItemChecked,
  onItemRemoved,
}) {
  return (
    <div
      className={`relative flex items-center p-3 w-full h-full hover:bg-gray-200`}>
      <div className="flex items-center h-5">
        <input
          checked={isDone}
          onChange={() => onItemChecked(id)}
          id={id}
          type="checkbox"
          className="border-gray-200 rounded-full shadow accent-blue-700 h-6 w-6"
        />
      </div>
      <label
        htmlFor={id}
        className={`ml-6 block w-full font-semibold text-3xl text-black ${
          isDone && "line-through opacity-80"
        }`}>
        {title}
      </label>
      <button
        className="font-bold opacity-50 hover:opacity-100"
        onClick={() => onItemRemoved(id)}>
        <BsTrash fontSize={30} />
      </button>
    </div>
  );
}
