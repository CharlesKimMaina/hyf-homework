import React, { useState, useEffect } from 'react'

function Timer() {

    const [count, setCount] = useState(0);

    useEffect(()=>{
    setTimeout(() => {
        setCount((prev) => prev + 1);        
    }, 1000)
});

    return (
        <div>
         <p>You have use {count} seconds on the website</p>   
        </div>
    )
}

export default Timer
