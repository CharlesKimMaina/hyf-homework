import React, { useState } from 'react'
import EmployeeSearch from './EmployeeSearch';



function Shift() {

    const [shift, setShift] = useState({
        empName: "",
        startTime: "",
        endingTime: "",
      });

      const [register, setRegister] = useState([]);
      

      const inputEvent = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setShift((origValue) => {
          if (name === "empName") {
            return {
              empName: value,
              startTime: origValue.startTime,
              endingTime: origValue.endingTime,
            };
          } else if (name === "startTime") {
            return {
              empName: origValue.empName,
              startTime: value,
              endingTime: origValue.endingTime,
            };
          } else if (name === "endingTime") {
            return {
              empName: origValue.empName,
              startTime: origValue.startTime,
              endingTime: value,
            };
          }
        });
      };

      const onSubmits = (event)=>{
          event.preventDefault();
          setRegister((origValue)=>{
              return [...origValue, shift]
          })

      }

    return (
        <div>
           <form onSubmit={onSubmits}>
        <div>
          <h1>Shift Overview</h1>
          <div>Submit Shift</div> <br></br>
          <div>
            <input
              type="text"
              placeholder="Enter name"
              name="empName"
              value={shift.empName}
              onChange={inputEvent}              
            ></input>
            <br></br>
            <br></br>
            <input
              type="time"
              name="startTime"            
              value={shift.startTime}
              onChange={inputEvent}
            ></input>
            <br></br>
            <br></br>
            <input
              type="time"
              name="endingTime"             
              value={shift.endingTime}
              onChange={inputEvent}
            ></input>
            <br></br> 
        </div>
        <button onClick={onSubmits}>Save Shift</button>        
        </div>
              </form>                       
      </div>   
    )  
} 

export default Shift


