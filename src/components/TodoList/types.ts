import { ITodo } from "../../models"

export interface ITodoList {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}