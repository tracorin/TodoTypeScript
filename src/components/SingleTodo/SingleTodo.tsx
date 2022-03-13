import { ISingleTodo } from "./types";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import useSingleTodo from "./useSingleTodo";
import "./styles.css";

const SingleTodo = ({ todo, setTodos, todos }: ISingleTodo) => {
  const {
    inputRef,
    edit,
    setEdit,
    editTodo,
    setEditTodo,
    handleDelete,
    handleDone,
    handleEdit,
  } = useSingleTodo({todo, setTodos, todos});

  return (
    <form className="todo__single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todo__single--text"
          ref={inputRef}
        />
      ) : todo.completed ? (
        <s className="todo__single--text">{todo.todo}</s>
      ) : (
        <span className="todo__single--text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            setEdit((prev) => !prev);
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
