import { ITodo } from "../../models";

export interface ISingleTodo {
    todos: ITodo[],
    todo: ITodo,
    setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
}