import {useRecoilValue } from "recoil";
import { TodoItemCreator } from "./TodoItemCreator";
import { filteredTodoListState } from "../state";
import { TodoItem } from "./TodoItem";
import { TodoListFilters } from "./TodoListFilters";
import { TodoListStats } from "./TodoListStats";

export function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
