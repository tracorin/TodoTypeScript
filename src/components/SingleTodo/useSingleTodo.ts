import { useState, useEffect, useRef, FormEvent} from "react";
import { ISingleTodo } from "./types";

const useSingleTodo = ({todo, setTodos, todos}: ISingleTodo) => {
    const inputRef = useRef<HTMLInputElement>(null);  
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    
    const handleDone = (id: number) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    };
  
    const handleDelete = (id: number) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    };
  
    const handleEdit = (e: FormEvent, id: number) => {
      e.preventDefault();
  
      setTodos(
        todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
      );
  
      setEdit(false);
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit])

    return { edit, setEdit, handleDelete, handleDone, handleEdit, inputRef, editTodo, setEditTodo}
}

export default useSingleTodo;