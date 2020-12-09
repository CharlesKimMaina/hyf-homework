import react, { useState } from 'react';
import { FibonacciIncrement } from './FibonacciIncrement';
import { FibonacciList } from './FibonacciList';

export function FibonacciTest() {
  const [fiboList, setFiboList] = useState([0, 1]);

  return (
    <div>
      <FibonacciIncrement setFiboList={setFiboList} />
      <FibonacciList fiboList={fiboList} /> 
      {/*fiboList component has initial state, and setFiboList updates the state, so LOGIC to update 
      willb here. Otherwise, if we dont hv these parameters to change state passed here, this 
      component can be app root component. These component is keeping track of state. And these 
      state is USED by its 2 components ie FibonacciIncrement and FibonacciList. This is very very 
      DECLARATIVE as it is telling us whats going on here*/}

    </div>
  );
}
