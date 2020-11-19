import React, {useState}from 'react'

    function Counter () {
    
        const [counterState, setCounterState] = useState([0, 1]);
      
        // ... some code here
        const increment = () => {
          const lastNum= counterState[counterState.length - 1];
          const secondLastNum = counterState[counterState.length - 2];
          const nextFibonacciNum = lastNum + secondLastNum;
          setCounterState([...counterState, nextFibonacciNum]);  
        };

          /*spread operator will make a copy of the initial state which is counterState and 
          nextFibonacciNum will append the new fibonacci number and pass it as an arguement 
          to the setCounterState- function */  
      
        return (
            <div>
                { counterState.map(counter => <div>{counter}</div>) }
                <button onClick={increment}>Increment</button>
            </div>
        );  
    }
    

export default Counter
