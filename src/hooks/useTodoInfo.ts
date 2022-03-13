import { FormEvent, useState } from "react";
import { ITodo } from "../models";

const useTodoInfo = () => {
    const [todo, setTodo] = useState<string>('');
    const [todos, setTodos] = useState<ITodo[]>([])

    const handleAddTodo = (e: FormEvent) => {
        e.preventDefault();
    
        if(todo){
          setTodos([{id: Date.now(), todo: todo, completed: false}, ...todos]);
          setTodo('')
        }
      }

    return { todo, setTodo, todos, setTodos, handleAddTodo } 
}

export default useTodoInfo;