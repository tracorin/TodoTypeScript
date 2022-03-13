import SingleTodo from '../SingleTodo';
import { ITodoList } from './types';
import './styles.css';

const TodoList = ({todos, setTodos}: ITodoList) => {
    return (
      <div className="todos">
        {todos.map((todo) => {
          return (
            <SingleTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
          )
        })}
      </div>
    );
}

export default TodoList;