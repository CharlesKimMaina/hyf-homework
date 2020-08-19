import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
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
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>todo App</h1>
        <button onClick={this.addTodoItem}>Add Todo</button>
        <ul>
          {this.state.todos.map((task, i) => {
            return (
              <li key={i}>
                {task.description}{" "}
                <button data-index={i} onClick={this.deleteTodoItem}>
                  Completed
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  addTodoItem = () => {
    const updatedTodo = this.state.todos;
    updatedTodo.push({
      id: Math.floor(Math.random() * 100),
      description:
        updatedTodo[Math.floor(Math.random() * updatedTodo.length)].description,
    });
    this.setState({ todos: updatedTodo });
  };

    deleteTodoItem = (id) => {
        const newTodos = this.state.todos.filter(todo => {
            return todo.id !== id;
        });
        const newTodoList = this.setState({
            todos: newTodos,
        });
    };
}

export default App;
