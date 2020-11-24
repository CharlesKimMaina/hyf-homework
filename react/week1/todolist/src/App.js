import React from 'react';
import Todos from './components/Todos';
import Title from './components/Title';

function App() {
  const todos = [
  {  description: "Get out of bed", deadline : "Wed Sep 13 2017"}, 
 {description: "Brush teeth", deadline: "Thu Sep 14 2017"}, 
 {description: "Eat breakfast", deadline: "Fri Sep 15 2017"}, 
 {description: "cook lunch", deadline: "Sat Sep 16 2017"}
  ]
  return (
    <div className="App">
      <Title/>
     <Todos duties={todos}/>     
 
    </div>
  );
}


export default App;
