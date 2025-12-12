import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { Button, FormControl } from "react-bootstrap";

export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();
  if (!todo) {
    return null; // Prevent rendering if todo is undefined
  }
  return (
    <tr>
      <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
        <div className="d-flex justify-content-between align-items-center">
          <FormControl
            value={todo.title || ""}
            onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
            className="flex-grow-1 me-2"
          />
          <Button 
            onClick={() => dispatch(updateTodo(todo))}
            variant="warning"
            id="wd-update-todo-click"
            className="me-2"> 
            Update 
          </Button>
          <Button 
            onClick={() => dispatch(addTodo(todo))}
            variant="success"
            id="wd-add-todo-click"> 
            Add 
          </Button>
        </div>
      </td>
    </tr>
);}