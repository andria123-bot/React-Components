/* eslint-disable no-const-assign */
import { useState, useEffect } from 'react'

function Counter(){
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("Component re-rendered");
  }, []) // empty dependency array means it will run only once on component mount

  return(
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default Counter;