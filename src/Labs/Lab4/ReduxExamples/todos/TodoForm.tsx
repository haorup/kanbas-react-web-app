import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { useDispatch, useSelector } from "react-redux";
export default function TodoForm() {
    const dispatch = useDispatch();
    const { todo } = useSelector((state: any) => state.todosReducer);

    return (
        <li className="list-group-item">
            <button onClick={() => dispatch(addTodo(todo))}
                className="btn btn-success me-2 float-end"
                id="wd-add-todo-click">
                {" "}
                Add{" "}
            </button>
            <button
                onClick={() => dispatch(updateTodo(todo))}
                className="btn btn-warning me-2 float-end"
                id="wd-update-todo-click">
                {" "}
                Update{" "}
            </button>
            <input
                className="form-control w-50"
                value={todo.title}
                onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
            />
        </li>
    );
}