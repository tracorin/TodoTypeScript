import React from 'react';
import { TextInput, TodoList } from './components';
import './App.css';
import useTodoInfo from './hooks/useTodoInfo';

const App: React.FC = () => {
  const {todo, setTodo, todos, setTodos, handleAddTodo} = useTodoInfo()
  
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <TextInput todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
