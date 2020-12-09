import React from 'react';
import Header from './components/Header';
import Todos from './components/Todos';
import Timer from './components/Timer';

function App() {
  return (
    <div>
      <Header />
      <Timer />
      <Todos />
    </div>
  )
}

export default App
