import react from 'react';

export function FibonacciList(prop) {
     
    return (
      <div>
        {prop.fiboList.map(counter => (
          <div>{counter}</div>
        ))}
      </div>
    );
  }
  