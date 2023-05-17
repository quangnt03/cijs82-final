import FilterItem from "./FilterItem";

export default function TodoFilter({ currentFilter='All', onFilterChange }) {
  const onItemFilterChange = (item) => {
    onFilterChange(item);
  };

  return (
    <div className="flex flex-row justify-around px-10 my-8">
      <FilterItem
        title={"All"}
        currentFilter={currentFilter}
        isSelectedFilter={currentFilter === "All"}
        onItemFilterChange={onItemFilterChange}
      />
      <FilterItem
        title={"Active"}
        currentFilter={currentFilter}
        isSelectedFilter={currentFilter === "All"}
        onItemFilterChange={onItemFilterChange}
      />
      <FilterItem
        title={"Complete"}
        currentFilter={currentFilter}
        isSelectedFilter={currentFilter === "All"}
        onItemFilterChange={onItemFilterChange}
      />
    </div>
  );
}