import React, { useState } from "react";
import { Timer } from './Timer';
//import Done from "./Done";
//import DeleteMe from "./DeleteMe";


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
  const [done, setDone] = useState(false);

  function addTodoItem() {
    let randomToDo = todos[Math.floor(Math.random() * todos.length)];
    setRandomToDo(randomToDo);

    settodoList(todoList.concat(randomToDo));
  }

   return (
    <div className="App">      
      <button onClick={addTodoItem}>Add to do</button>
      <ul>
        {todoList.map((todo) => {
          return <div> 
          <li key={todo.id}>{":"}{todo.description}</li> 
          <button>done</button>     
            <button>delete </button>     
          </div>
        })}
      </ul>
    </div>
  );
}

export default Todos;


