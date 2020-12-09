import React, { useState } from "react";
import { Timer } from './Timer';

function Todos() {
    const todos = [
        {
          id: 1,
          description: "Get out of bed",
        },
        {
          id: 2,
          description: "Brush teeth",
        },
        {
          id: 3,
          description: "Eat breakfast",
        },
        {
            id: 4,
            description: "wash my car",
          },
      ];

  const [todoList, settodoList] = useState([]);
  const [randomToDo, setRandomToDo] = useState(" ");
  
  function addTodoItem() {
    let randomToDo = todos[Math.floor(Math.random() * todos.length)];
    setRandomToDo(randomToDo);

    settodoList(todoList.concat(randomToDo));
  }


  function deleteTodo(e) {
    const { id } = e.target.parentElement
    todoList.splice(id, 1)
    settodoList([...todoList]);
      } 

  return (
    <div className="App">      
      <button onClick={addTodoItem}>Add to do</button>
      <ul>
        {todoList.map((todo, i) => {
          return <div key={todo.id} id={i}> 
          <li> {todo.description}</li> 
          <button>done</button> 
          <button onClick={deleteTodo}>delete </button>         
          </div>
        })}
  
      </ul>
    </div>
  );
}

export default Todos;
