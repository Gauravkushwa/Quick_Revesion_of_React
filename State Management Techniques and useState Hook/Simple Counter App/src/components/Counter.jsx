import React from 'react'
import { useState } from 'react'
import '../index.css'

function Counter() {
    const [count, setCount] = useState(0);

    const increase = () =>{
        setCount(count+1)
    
    }
    const decrease = () =>{
        setCount( count - 1)
    }

    const reset = () => {
        setCount(0)
    }
  return (
    <div>
        <h1>The Counter is: {count}</h1>
      <button onClick={increase}>Increase By 1</button>
      <button onClick={decrease}>Decrease By 1</button>
      <button onClick={reset}>Reset </button>
    </div>
  )
}

export default Counter

