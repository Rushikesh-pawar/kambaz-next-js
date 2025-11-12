import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo }: {
    todo: { id: string; title: String };
  }) {
    const dispatch = useDispatch();
  return (
    <tr key={todo.id}>
      <td style={{ border: "1px solid #dee2e6", padding: "8px" }}>
        <div className="d-flex justify-content-between align-items-center">
          <span className="flex-grow-1 me-2">{todo.title}</span>
          <Button 
            onClick={() => dispatch(setTodo(todo))}
            variant="primary"
            id="wd-set-todo-click"
            className="me-2"> 
            Edit 
          </Button>
          <Button 
            onClick={() => dispatch(deleteTodo(todo.id))}
            variant="danger"
            id="wd-delete-todo-click"> 
            Delete 
          </Button>
        </div>
      </td>
    </tr>
);}