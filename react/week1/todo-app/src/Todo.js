import React from "react";

function Todo(props) {
  return (
    <li>
      {props.description} {props.date}
    </li>
  );
}

export default Todo;
