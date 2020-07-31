import React from "react";
import Todo from "./Todo";

function App() {
  return (
    <div>
      <h1>Todo-App</h1>

      <Todo description="get out of bed" date="Wed Sep 13 2017" />
      <Todo description="Brush teeth" date="Thu Sep 14 2017" />
      <Todo description="Eat breakfast" date="Fri Sep 15 2017" />
    </div>
  );
}

export default App;
