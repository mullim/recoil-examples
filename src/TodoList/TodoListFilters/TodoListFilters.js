import { useRecoilState } from "recoil";
import { todoListFilterState } from "../../state";

export function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({target: {value}}) => {
    setFilter(value);
  };

  console.log(filter)

  return (
    <>
      <span>Filter</span>:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );

}
