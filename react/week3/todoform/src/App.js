import React from 'react';
import './App.css';
import Modal from './Modal/Modal';
import Todos from './Modal/Todos';
import Timer from './Modal/Timer';
import TodoList from './Modal/TodoList';
import TodoForm from './Modal/TodoForm';

function App() {
  return (
    <div className="App">
      <Modal>
        <Todos />
        <Timer />
        <TodoForm />
        <TodoList />
        </Modal>
      
    </div>
  );
}

export default App;
