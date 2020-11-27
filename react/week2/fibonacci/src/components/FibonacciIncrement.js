import React from "react";


export function FibonacciIncrement(prop) {
  const increment = () => {
    prop.setFiboList((previous) => {
      const fibSeries = [...previous];     
      for (let i = previous.length; i < previous.length + 10; i++) {
        fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
      }
      return [...fibSeries];
    }); //on click, it will renders and displays next 10 fibonacci numbers
  };
  return (
    <div>
      <button onClick={increment}>increment</button>
    </div>
  );
}
