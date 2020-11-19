import React from 'react'

function Todos({duties}) {
    return (
         <div>
          
          <ul>
      {duties.map((duty)=>{
        return <li>{duty.description}    {duty.deadline}</li>
      })}
  </ul>      
    </div>
    )
}

export default Todos
