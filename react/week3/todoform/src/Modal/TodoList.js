import React, { useState, useEffect } from 'react'
import Todos from './Todos';

function TodoList(props) {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // IIFE
        (async () => {
          const result = await fetch('https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw');
          const content = await result.json();
          console.log(content);
             setTodos((prev) => {
            return (content);
          });
        })();
      }, []);

    return (
        <div>          

    return <div> {todos.description}{""}{todos.deadline}</div>;
        </div>
    )
}

export default TodoList
