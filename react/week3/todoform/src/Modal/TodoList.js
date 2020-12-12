import React, { useState, useEffect } from 'react'
import Todos from './Todos';
import axios from 'axios'

function TodoList() {
    const [todos, setTodos] = useState([]);
    
    useEffect(()=> {
        axios.get('https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw')
        .then(res => {
            console.log(res)
            setTodos(res.data)
        })//This will update the todos state variable, which will then be renedered in the UI. 
        .catch(err => {
            console.log(err)
        })      
    })
    
    return (
        <div>
           <ul>
        {todos.map(todo =>(
            <li key={todo.id}>{todo.description}{todo.deadline}</li>
        ))}
    </ul> 
        </div>
    )
}

export default TodoList 
