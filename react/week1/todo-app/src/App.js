import React from "react";
import Todo from "./Todo";

function App() {
  return (
    <div>
      <h1>Todo-App</h1>

<TodoList todos={todos} />
    </div>
  );
}

export default App;
