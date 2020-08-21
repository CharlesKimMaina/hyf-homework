import React, { Component } from "react";
import Timer from "./Timer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      date: "",
      time: 0,
      todolist: [],
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Todolist</h1>
        <Timer />
        description{" "}
        <input
          className="input"
          onChange={this.changeHandle}
          value={this.state.input}
          placeholder="test item"
        />
        <br />
        deadline{" "}
        <input type="date" value={this.state.date} onChange={this.changeDate} />
        <br />
        <button onClick={this.addTodo}>Add Todo</button>
        <ul>
          {this.state.todolist.map((task, i) => (
            <li key={i}>
              {task}
              {"|"} {this.state.date}{" "}
              <button data-index={i} onClick={this.deleteTodo}>
                Delete
              </button>
              <button>Edit</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  deleteTodo = (event) => {
    const index = event.target.dataset.index;
    this.setState((state) => {
      const todolist = [...state.todolist];
      todolist.splice(index, 1);
      return { todolist: todolist };
    });
  };

  changeHandle = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  addTodo = () => {
    this.setState((state) => ({
      todolist: [...state.todolist, state.input],
      input: "",
    }));
  };

  changeDate = (event) => {
    this.setState({
      date: event.target.value,
    });
  };
}

export default App;
