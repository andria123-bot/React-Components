import { useState, useEffect } from 'react'

const ReRender = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("re-rendered");
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>   
    </div>
  )
}

export default ReRender;