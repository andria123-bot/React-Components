import { useState, useEffect } from 'react'

function States(){
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count updated!");
  }, [count])

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Click me</button>
    </div>
  )
} 

export default States;