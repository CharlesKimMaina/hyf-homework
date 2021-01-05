import React, {useState } from 'react';

function TodoForm(props) {

const [description, setDescription] = useState("");
const [deadline, setDeadline] = useState("");

const handleChange = (event) => {
    return setDescription(event.target.value);
  };

  const handleDeadline = (event) => {
    return setDeadline(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //props.onSubmit(e);

    setDescription("");
    setDeadline("");
    return;
  };

    return (
        <div>
           <form onSubmit={handleSubmit}>
      <label>
        <div>
          Description:
          <input
            name="description"
            type="text"
            value={description}
            onChange={handleChange}
            placeholder="Add a todo"
          />
        </div>
        <div>
          Deadline:
          <input
            name="deadline"
            type="datetime-local"
            value={deadline}
            onChange={handleDeadline}
          ></input>
        </div>
      </label>
      <input type="submit" value="Submit" />
    </form>
     </div>
  );
}; 
       
    

export default TodoForm
