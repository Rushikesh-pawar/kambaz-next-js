import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
export default function TodoList() {
  const { todos } = useSelector((state: any) => state.todosReducer);
  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <table style={{ border: "1px solid #dee2e6", borderCollapse: "collapse", width: "100%" }}>
        <tbody>
          <TodoForm key={"td-item-1"} />
          {todos.map((todo: any) => (
            <TodoItem
            key={todo.id} 
            todo={todo}
             />
          ))}
        </tbody>
      </table>
      <hr/>
    </div>
);}