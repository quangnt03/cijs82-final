function FilterItem({ title, currentFilter, onItemFilterChange}) {
  if (currentFilter === title) {  
    return (
      <div
        onClick={() => onItemFilterChange(title)}
        className="text-center font-semibold text-xl w-1/3 pb-3 border-b-4 border-blue-600">
        {title}
      </div>
    )
  } else {  
    return (
      <div
        onClick={() => onItemFilterChange(title)}
        className="text-center font-semibold text-xl w-1/3 pb-3 border-b-4">
        {title}
      </div>
    )
  }
}

export default FilterItem;